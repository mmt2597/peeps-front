import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-pages-contact-index',
  templateUrl: './pages-contact-index.component.html',
  styleUrls: ['./pages-contact-index.component.scss']
})
export class PagesContactIndexComponent implements OnInit {
  contactForm: FormGroup
  errors: any = [];
  btnBusy: boolean = false; 

  constructor(
    private formBuilder: FormBuilder,
    private contactFormService: ContactFormService
  ) { 
    this.contactForm = this.formBuilder.group({
      name: [],
      email: [],
      phone_number: [],
      message: [],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errors = null;

    if(this.btnBusy) return;

    this. btnBusy = true;
    this.contactFormService.send(this.contactForm.value).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'info',
          title: 'Message Sent. Thank you for reaching us!',
          confirmButtonColor: '#4ba2ac'
        })
        this.contactForm.reset()
        this.btnBusy = false;
      },
      error: (error: any) => {
        this.errors = error?.errors
        this.btnBusy = false;
      },
    });
  }
}
