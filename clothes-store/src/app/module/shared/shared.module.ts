import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ],
})
export class SharedModule {}
