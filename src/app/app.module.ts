import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { EmptyComponent } from './empty/empty.component';
import { ProductTComponent } from './product-t/product-t.component';
import { ProductOComponent } from './product-o/product-o.component';
import { ProductFComponent } from './product-f/product-f.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    EmptyComponent,
    ProductTComponent,
    ProductOComponent,
    ProductFComponent,
    ProductDescComponent,
    ProductSellerComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
