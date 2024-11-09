import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FeatureComponent } from './components/feture.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductReviewCardComponent } from './components/product-details/product-review-card/product-review-card.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderCardComponent } from './components/order/order-card/order-card.component';
@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    HomeProductCardComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductReviewCardComponent,
    AddressFormComponent,
    OrderCardComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  exports: [FeatureComponent, HomeComponent, ProductsComponent],
})
export class FeatureModule {}
