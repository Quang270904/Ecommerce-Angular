import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './Models/appState';
import { UserService } from './State/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clothes-store';

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    if (localStorage.getItem('jwt')) {
      this.store.pipe(select((store) => store.auth)).subscribe((user) => {
        this.userService.getUserProfile();
      });
    }
  }
}
