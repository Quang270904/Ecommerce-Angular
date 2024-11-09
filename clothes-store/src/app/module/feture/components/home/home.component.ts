import { Component } from '@angular/core';
import { menJeans } from 'src/Data/Men/menJeans';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menJeans: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0,5);
    
  }
}
