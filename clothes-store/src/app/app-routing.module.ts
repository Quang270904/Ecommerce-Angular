import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/feture/components/home/home.component';
import { ProductsComponent } from './module/feture/components/products/products.component';
import { CartComponent } from './module/feture/components/cart/cart.component';
import { ProductDetailsComponent } from './module/feture/components/product-details/product-details.component';
import { CheckoutComponent } from './module/feture/components/checkout/checkout.component';
import { PaymentComponent } from './module/feture/components/payment/payment.component';
import { PaymentSuccessComponent } from './module/feture/components/payment-success/payment-success.component';
import { OrderComponent } from './module/feture/components/order/order.component';
import { OrderDetailsComponent } from './module/feture/components/order-details/order-details.component';
import { AdminRoutingModule } from './module/admin/admin-routing.module';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./module/admin/admin-routing.module').then(
        (m) => AdminRoutingModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products-details/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/payment/:id', component: PaymentComponent },
  { path: 'lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
