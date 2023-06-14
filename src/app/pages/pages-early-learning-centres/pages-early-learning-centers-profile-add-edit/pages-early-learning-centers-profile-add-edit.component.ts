import { first } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterProfileService } from 'src/app/services/center-profile.service';

@Component({
  selector: 'app-pages-early-learning-centers-profile-add-edit',
  templateUrl: './pages-early-learning-centers-profile-add-edit.component.html',
  styleUrls: ['./pages-early-learning-centers-profile-add-edit.component.scss']
})
export class PagesEarlyLearningCentersProfileAddEditComponent implements OnInit {

  id!: string;
  errors: any = null;
  isAddMode!: boolean;
  avatarPreview = 'assets/images/icons/head-icon.png';
  centersProfileForm: FormGroup;
  selectedAvatarFile!: any;
  questions: any = [];
  defaultAvatar = 'assets/images/icons/head-icon.png';

  options: any = {
    componentRestrictions: {
      country: ['AU']
    }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private centerProfileService: CenterProfileService
  ) {
    this.centersProfileForm = this.formBuilder.group({
      avatar_file: [],
      center_name: [],
      email: [],
      phone_number: [],
      lat: null,
      lng: null,
      address: [],
      address2: [],
      suburb: [],
      city: [],
      state: [],
      post_code: [],
      country: [],
      remove_avatar: [false, ''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.loadQuestions();

    if(!this.isAddMode) {
      this.centerProfileService.getById(this.id, 'early-learning-centres/')
        .pipe(first())
        .subscribe((resp: any) => {
          this.avatarPreview = resp.data?.avatar_url;
          this.centersProfileForm.patchValue(resp.data)
        });
    }
  }

  loadQuestions() {
    // Load dynamic questions
    this.centerProfileService
      .getQuestions({ centers_profile_uuid: this.id ?? null }, 'early-learning-centres/')
      .pipe(first())
      .subscribe((res: any) => this.questions = res.data);
  }

  public AddressChange(address: any) {
    let components = address.address_components;
    this.centersProfileForm.controls['address'].setValue(address.formatted_address);
    this.centersProfileForm.controls['lat'].setValue(address.geometry.location.lat());
    this.centersProfileForm.controls['lng'].setValue(address.geometry.location.lng());
    
    components.find((component: any, i: Number) => {
      let types = component.types;
 
      if(types.includes('country')) this.centersProfileForm.controls['country'].setValue(component.long_name);
      if(types.includes('administrative_area_level_1')) this.centersProfileForm.controls['state'].setValue(component.short_name);
      if(types.includes('locality')) this.centersProfileForm.controls['city'].setValue(component.long_name);
      if(types.includes('postal_code')) this.centersProfileForm.controls['post_code'].setValue(component.long_name);
    });
  }

  onUploadImage(event: any) {
    const file = event.files[0];
    const reader = new FileReader();

    this.selectedAvatarFile = file;
    this.centersProfileForm.controls['remove_avatar'].setValue(0);

    reader.onload = () => this.avatarPreview = reader.result as string;
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.errors = null;
    this.isAddMode ? this.createCentreProfile() : this.updateCentreProfile();
  }

  removeAvatar() {
    this.centersProfileForm.controls['remove_avatar'].setValue(1);
    this.avatarPreview = this.defaultAvatar;
  }

  private transformQuestionAnswers() {
    return this.questions.map((val: any) => {
      return {
        'uuid': val.uuid,
        'answer': val.answer,
        'field_type': val.question.field_type,
      };
    });
  }

  private createCentreProfile() {
    const formData = this.transformJsonToFormData(this.removeEmpty(this.centersProfileForm.value));
    formData.append('user_questions', JSON.stringify(this.transformQuestionAnswers()));
    formData.append('avatar_file', this.selectedAvatarFile);

    this.centerProfileService
      .add(formData, 'early-learning-centres/')
      .pipe(first())
      .subscribe(
        result => {},
        error => this.errors = error.errors,
        () => {
          this.toastr.success('', 'Successfully added');
          this.router.navigate(['early-learning-centres/centers-profile']);
        }
      );
  }

  private updateCentreProfile() {
    const formData = this.transformJsonToFormData(this.removeEmpty(this.centersProfileForm.value));
    formData.append('user_questions', JSON.stringify(this.transformQuestionAnswers()));
    formData.append('avatar_file', this.selectedAvatarFile);

    this.centerProfileService
      .update(this.id, formData, 'early-learning-centres/')
      .pipe(first())
      .subscribe(
        result => {},
        error => this.errors = error.erorrs,
        () => {
          this.toastr.success('', 'Successfully updated');
          this.router.navigate(['early-learning-centres/centers-profile']);
        }
      );
  }

  private transformJsonToFormData(values: any) {
    const formData = new FormData();

    for(let key of Object.keys(values)) {
      formData.append(key, values[key]);
    }

    return formData;
  }

  resetForm() {
    this.centersProfileForm.reset();
    this.resetQuestion();
  }

  resetQuestion() {
    for(let key in this.questions) this.questions[key]['answer'] = null;
  }

  removeEmpty(obj: Object): any {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v != null)
        .map(([k, v]) => [k, v === Object(v) ? this.removeEmpty(v) : v])
    );
  }
}
