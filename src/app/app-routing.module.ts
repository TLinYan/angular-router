import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductTComponent } from './product-t/product-t.component';
import { ProductOComponent } from './product-o/product-o.component';
import { ProductFComponent } from './product-f/product-f.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { ChatComponent } from './chat/chat.component'
import { enterGuard } from './guard/enterGuard';
import { outGuard } from './guard/outGuard';
import { proResolve } from './guard/proResolve';

// 定义路由
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'product', component: ProductComponent,
    children: [ //子路由
      { path: 'productDesc', component: ProductDescComponent },

      // 三种方式路由传参
      // { path: 'productSeller', component: ProductSellerComponent, data: [{ id: 999 }] }
      // { path: 'productSeller/:id', component: ProductSellerComponent }
      { path: 'productSeller', component: ProductSellerComponent }
    ],
    // 路由守卫
    canActivate: [enterGuard],  //条件性进入某路由时
    canDeactivate: [outGuard]    //离开某路由时
  },
  { path: 'productT', component: ProductTComponent },
  { path: 'chats', component: ChatComponent, outlet: "chat" },
  {
    path: 'productO/:id', component: ProductOComponent,
    // 路由守卫之resolve，提前传数据
    resolve: { product: proResolve }
  },
  { path: 'productF', component: ProductFComponent, data: [{ id: 5 }] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }  //路由重定向
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // 手动注入路由守卫
  providers: [enterGuard, outGuard, proResolve]
})
export class AppRoutingModule { }
