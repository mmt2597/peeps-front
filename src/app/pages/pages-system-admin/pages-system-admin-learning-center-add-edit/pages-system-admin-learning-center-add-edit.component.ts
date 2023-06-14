import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { CenterProfileService } from 'src/app/services/center-profile.service';

let awsPublicUrl = environment.awsPublicUrl;

@Component({
  selector: 'app-pages-system-admin-learning-center-add-edit',
  templateUrl: './pages-system-admin-learning-center-add-edit.component.html',
  styleUrls: ['./pages-system-admin-learning-center-add-edit.component.scss']
})
export class PagesSystemAdminLearningCenterAddEditComponent implements OnInit {

  id!: string;
  errors: any = null;
  isAddMode!: boolean;
  avatarPreview: string = '';
  centersProfileForm: FormGroup;
  questions: any = [];
  users: any = [];
  selectedAvatarFile!: any;

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
    private userService: UserService,
    private centerProfileService: CenterProfileService
  ) {
    this.centersProfileForm = this.formBuilder.group({
      user_uuid: [''],
      avatar_file: [],
      center_name: [],
      email: [],
      phone_number: [],
      address: [],
      address2: [],
      suburb: [],
      lat: null,
      lng: null,
      city: [],
      state: [],
      post_code: [],
      country: [],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.loadQuestions();
    this.loadUsers();

    if(!this.isAddMode) {
      this.centerProfileService.getById(this.id, 'system-admin/')
        .pipe(first())
        .subscribe((resp: any) => {
          this.centersProfileForm.patchValue({ user_uuid: resp.data?.user?.uuid });
          this.avatarPreview = awsPublicUrl + resp.data?.avatar;
          this.centersProfileForm.patchValue(resp.data)
        });
    }
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
    reader.onload = () => this.avatarPreview = reader.result as string;
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.errors = null;
    this.isAddMode ? this.createCentreProfile() : this.updateCentreProfile();
  }

  private transformQuestionAnswers() {
    if(this.questions) {
      return this.questions.map((val: any) => {
        return {
          'uuid': val.uuid,
          'answer': val.answer,
          'field_type': val.question.field_type,
        };
      });
    }
  }

  private createCentreProfile() {
    const formData = this.transformJsonToFormData(this.removeEmpty(this.centersProfileForm.value));
    formData.append('user_questions', JSON.stringify(this.transformQuestionAnswers()));
    formData.append('avatar_file', this.selectedAvatarFile);

    this.centerProfileService
      .add(formData, 'system-admin/')
      .pipe(first())
      .subscribe(
        result => {},
        error => this.errors = error.errors,
        () => {
          this.toastr.success('', 'Successfully added');
          this.router.navigate(['system-admin/learning-centers']);
        }
      );
  }

  private updateCentreProfile() {
    const formData = this.transformJsonToFormData(this.removeEmpty(this.centersProfileForm.value));
    formData.append('user_questions', JSON.stringify(this.transformQuestionAnswers()));
    formData.append('avatar_file', this.selectedAvatarFile);

    this.centerProfileService
      .update(this.id, formData, 'system-admin/')
      .pipe(first())
      .subscribe(
        result => {},
        error => this.errors = error.erorrs,
        () => {
          this.toastr.success('', 'Successfully updated');
          this.router.navigate(['system-admin/learning-centers']);
        }
      );
  }

  loadQuestions() {
    // Load dynamic questions
    this.centerProfileService
      .getQuestions({ centers_profile_uuid: this.id ?? null }, 'system-admin/')
      .pipe(first())
      .subscribe((res: any) => this.questions = res.data);
  }

  loadUsers() {
    this.userService
      .get({ role: 'Early Learning Centres'}, 'system-admin/')
      .pipe(first())
      .subscribe((res: any) => this.users = res.data);
  }

  private transformJsonToFormData(values: any) {
    const formData = new FormData();

    for(let key of Object.keys(values)) {
      formData.append(key, values[key]);
    }

    return formData;
  }

  removeEmpty(obj: Object): any {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v != null)
        .map(([k, v]) => [k, v === Object(v) ? this.removeEmpty(v) : v])
    );
  }

  resetForm() {
    this.centersProfileForm.reset();
    this.resetQuestion();
  }

  resetQuestion() {
    for(let key in this.questions) this.questions[key]['answer'] = null;
  }
}
