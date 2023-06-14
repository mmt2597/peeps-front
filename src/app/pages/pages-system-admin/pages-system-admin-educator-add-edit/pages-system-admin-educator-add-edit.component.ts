import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pages-system-admin-educator-add-edit',
  templateUrl: './pages-system-admin-educator-add-edit.component.html',
  styleUrls: ['./pages-system-admin-educator-add-edit.component.scss']
})
export class PagesSystemAdminEducatorAddEditComponent implements OnInit {

  id!: string;
  isAddMode!: boolean;
  data: any = {
    user: {
      role: 'Early Childhood Educator',
      avatar: null,
      avatar_url: null,
      avatar_file: null,
      first_name: null,
      last_name: null,
      email: null,
      phone_number: null,
      lat: null,
      lng: null,
      address: null,
      address2: null,
      suburb: null,
      city: null,
      state: '',
      post_code: null,
      country: '',
      password: null,
      password_confirmation: null,
    },
  };
  errors: any;
  options: any = {
    componentRestrictions: {
      country: ['AU']
    }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if(!this.isAddMode) {
      this.userService.getByUuid(this.id, null, 'system-admin/')
        .pipe(first())
        .subscribe((resp: any) =>  this.data.user = resp.data);
    }
  }


  public AddressChange(address: any) {
    let components = address.address_components;
    this.data.user.address = address.formatted_address;
    this.data.user.lat = address.geometry.location.lat();
    this.data.user.lng = address.geometry.location.lng();
    
    components.find((component: any, i: Number) => {
      let types = component.types;
 
      if(types.includes('country')) this.data.user.country = component.long_name;
      if(types.includes('administrative_area_level_1')) this.data.user.state = component.short_name;
      if(types.includes('locality')) this.data.user.city = component.long_name;
      if(types.includes('postal_code')) this.data.user.post_code = component.long_name;
    });
  }

  onUploadImage(event: any) {
    const file = event.files[0];
    const reader = new FileReader();

    this.data.user.avatar_file = file;
    reader.onload = () => this.data.user.avatar_url = reader.result as string;
    reader.readAsDataURL(file);
  }

  onSubmitForm() {
    this.isAddMode ? this.createEducator() : this.updateEducator();
  }

  createEducator() {
    let formData = this.transformJsonToFormData(this.data.user);

    this.userService
      .add(formData, 'system-admin/')
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['system-admin/educators']);
          this.toastr.success("Successfully Added");
        },
        error: (error: any) => this.errors = error.errors,
        complete: () => {}
      });
  }

  updateEducator() {
    let formData = this.transformJsonToFormData(this.data.user);

    this.userService
    .update(this.id, formData, 'system-admin/')
    .subscribe({
      next: (res: any) => {
        this.router.navigate(['system-admin/educators']);
        this.toastr.success("Successfully Updated");
      },
      error: (error: any) => this.errors = error.errors,
      complete: () => {}
    })
  }

  private transformJsonToFormData(values: any) {
    const formData = new FormData();

    for(let key of Object.keys(values)) {
      if(key == 'avatar_url' || key == 'created_at' || key == 'updated_at') {} 
      else { formData.append(key, values[key]); }
    }

    return formData;
  }
}
