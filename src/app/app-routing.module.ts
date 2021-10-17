import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"shop",component:ShopComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"product-details",component:ProductDetailsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"login",component:LoginComponent},
  {path:"blog",component:BlogsComponent},
  {path:"blog-details",component:BlogDetailsComponent},
  {path:"confirmation",component:ConfirmationComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
