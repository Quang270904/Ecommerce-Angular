import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './module/shared/shared.module';
import { AdminModule } from './module/admin/admin.module';
import { FeatureModule } from './module/feture/feture.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './module/auth/auth.module';
import { authReducer } from './State/Auth/auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './State/User/user.reducer';
import { productReducer } from './State/Product/product.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    StoreModule.forRoot(
      { auth: authReducer, user: userReducer, product: productReducer },
      {}
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
