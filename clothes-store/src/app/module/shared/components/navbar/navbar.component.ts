import { getUserProfile } from './../../../../State/User/user.action';
import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/Models/appState';
import { AuthComponent } from 'src/app/module/auth/auth.component';
import { UserService } from 'src/app/State/User/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentSection: any;
  isNavbarContentOpen: any;
  userProfile: any;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private store: Store<AppState>
  ) {}
  openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }
  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  ngOnInit() {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile();
    this.store.pipe(select((store) => store.user)).subscribe((user) => {
      this.userProfile = user.userProfile;
      if (user.userProfile) {
        this.dialog.closeAll();
      }
      console.log('user', user);
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });
    if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }

  handelOpenLoginModal = () => {
    this.dialog.open(AuthComponent, { width: '500px', disableClose: false });
  };

  handleLogout() {
    this.userService.logOut();
  }
}
