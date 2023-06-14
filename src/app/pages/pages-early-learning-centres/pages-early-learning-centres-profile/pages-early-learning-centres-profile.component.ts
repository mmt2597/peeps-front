import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-pages-early-learning-centres-profile',
  templateUrl: './pages-early-learning-centres-profile.component.html',
  styleUrls: ['./pages-early-learning-centres-profile.component.scss']
})
export class PagesEarlyLearningCentresProfileComponent implements OnInit {
  faqs: any = [];
  user: any = {
    avatar: null,
    first_name: null,
    last_name: null,
    email: null,
    phone_number: null,
    address: null,
    address2: null,
    city: null,
    state: null,
    post_code: null,
    country: null,
    lat: null,
    lng: null,
  };
  errors: any;
  selectedFile!: ImageSnippet; 
  options: any = {
    componentRestrictions: {
      country: ['AU']
    }
  };


  constructor(
    private toastr: ToastrService,
    private faqService: FaqService,
    private userService: UserService,
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
    // load profile details
    this.userService.getUserInfo()
      .pipe(first())
      .subscribe((res: any) => this.user = res.data);
    
    this.getFaqs();
  }
  
  getFaqs() {
    this.faqService
      .get({ category: 'profile' }, 'early-learning-centres/')
      .subscribe(res => this.faqs = res.data);
  }

  public AddressChange(address: any) {
    this.user.address = address.formatted_address;
    this.user.lat = address.geometry.location.lat(); 
    this.user.lng = address.geometry.location.lng(); 

    address.address_components.find((component: any, i: Number) => {
      let types = component.types;

      if(types.includes('country')) this.user.country = component.long_name;
      if(types.includes('administrative_area_level_1')) this.user.state = component.short_name;
      if(types.includes('locality')) this.user.city = component.long_name;
      if(types.includes('postal_code')) this.user.post_code = component.long_name;
    });
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  onUploadImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    if(file) {
      reader.addEventListener('load', (event: any) => {
        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.userService.uploadAvatar(this.selectedFile.file).subscribe(
          res => { 
            this.user.avatar_url = res.data.url;
            this.authService.updateUserLocalStorage();

          },
          err => this.onError()
        )
      });

      reader.readAsDataURL(file);
    }
  }

  onRemoveAvatar() {
    this.user.avatar_url = null;
    this.userService.removeAvatar().subscribe(res => {
      this.authService.updateUserLocalStorage();
      this.toastr.success("Successfully Removed")
    });
  }

  onUpdate() {
    this.errors = null;
    this.updateUser();
  }

  private updateUser() {
    this.userService.updateProfile(this.user).subscribe({
      next: (res: any) => {
        this.authService.updateUserLocalStorage();
        this.toastr.info('Record Updated');
      },
      error: (error: any) => this.errors = error.errors,
    });  
  }

}
