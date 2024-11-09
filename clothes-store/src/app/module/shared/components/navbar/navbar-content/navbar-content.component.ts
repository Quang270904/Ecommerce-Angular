import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationData } from './nav-content';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.scss'],
})
export class NavbarContentComponent implements OnInit {
  category: any;
  @Input() selectedSection: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.category = navigationData;
    console.log('selected ', this.selectedSection);
  }

  navigateToProduct(levelOne: string, levelTwo: string, levelThree: string) {
    this.router.navigate([`lavelOne/${levelTwo}/${levelThree}`]);
  }

  
}
