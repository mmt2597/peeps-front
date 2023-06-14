import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Component, HostListener, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthStateService } from 'src/app/services/auth-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() fixedTop!: boolean;
  isSignedIn: boolean = false;
  user?: User;

  @ViewChild('navbarNav', {static: true}) navbarNav: ElementRef | undefined;
  @ViewChild('navbarEl', {static: true}) navbarEl: ElementRef | undefined;
  constructor(
    private router: Router,
    private authState: AuthStateService,
    private authService: AuthService
  ) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScrollAndResize($event: Event){
    if(this.fixedTop) {
      const navCollapse = this.navbarNav?.nativeElement;
      const navbarEl = this.navbarEl?.nativeElement;
      const homeCarouselEl = document.querySelector('.home-carousel') as HTMLElement;
      const maxHeight = homeCarouselEl.clientHeight - navbarEl.clientHeight - 3;

      window.pageYOffset > maxHeight ? navbarEl.classList.add('bg-white') : navCollapse.classList.contains('show') ? navbarEl.classList.add('bg-white') : navbarEl.classList.remove('bg-white');
    }
  }
  
  ngOnInit(): void {
    this.authState.userAuthState.subscribe(val => {
      this.isSignedIn = val;
      this.user = this.authService.currentUserValue
    });

    this.authService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  ngAfterViewInit(): void {
    const navbarEl = this.navbarEl?.nativeElement;
    const homeCarouselEl = document.querySelector('.home-carousel') as HTMLElement;
    const carouselEl = homeCarouselEl ? homeCarouselEl.clientHeight : 0; 
    const maxHeight = carouselEl - navbarEl.clientHeight - 3;
    this.navbarNav?.nativeElement.addEventListener('show.bs.collapse', function () {
      navbarEl.classList.add('bg-white');
    });
    this.navbarNav?.nativeElement.addEventListener('hidden.bs.collapse', function () {
      window.pageYOffset > maxHeight ? navbarEl.classList.add('bg-white') : navbarEl.classList.remove('bg-white');
    });
  }

  onLogout() {
    this.authService.logout();
    location.reload();
  }

  goToProfile() {
    this.authService.redirectProfilePage();
  }
}
