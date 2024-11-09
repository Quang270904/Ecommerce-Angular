import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @Input() changeTemplate: any;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.authService.register(this.loginForm.value);
      console.log('Register request data: ', this.loginForm.value);
    }
  }
}
