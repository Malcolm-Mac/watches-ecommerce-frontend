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
  {path:"",component:HomeComponent,
    data: {
      title: 'Home Page | e-commerce'
    }
  },
  {path:"shop",component:ShopComponent,
    data: {
      title: 'Watch shop | e-commerce'
    }
  },
  {path:"about-us",component:AboutUsComponent,
    data: {
      title: 'About us Page | e-commerce'
    }
  },
  {path:"product-details",component:ProductDetailsComponent,
    data: {
      title: 'Product Details | e-commerce'
    }
  },
  {path:"contact-us",component:ContactUsComponent,
    data: {
      title: 'Contact Us Page | e-commerce'
    }
  },
  {path:"login",component:LoginComponent,
    data: {
      title: 'Login Page | e-commerce'
    }
  },
  {path:"blog",component:BlogsComponent,
    data: {
      title: 'Blog Page | e-commerce'
    }
  },
  {path:"blog-details",component:BlogDetailsComponent,
    data: {
      title: 'Blog Details | e-commerce'
    }
  },
  {path:"confirmation",component:ConfirmationComponent,
    data: {
      title: 'Confirmation | e-commerce'
    }
  },
  {path:"checkout",component:CheckoutComponent,
    data: {
      title: 'Checkout Page | e-commerce'
    }
  },
  {path:"cart",component:CartComponent,
    data: {
      title: 'Cart Page | e-commerce'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
