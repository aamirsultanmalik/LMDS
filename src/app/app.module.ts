import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from 'ngx-img-zoom';


import { MainComponent } from './components/main/main.component';



import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';
import { ProductDialogComponent } from './components/shop/products/product-dialog/product-dialog.component';
import { ProductZoomComponent } from './components/shop/products/product-details/product-zoom/product-zoom.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { HomeComponent } from './components/shop/home/home.component';
import { MainCarouselComponent } from './components/shop/main-carousel/main-carousel.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { PriceComponent } from './components/shop/products/price/price.component';
import { ProductComponent } from './components/shop/products/product/product.component';
import { ProductDetailsComponent } from './components/shop/products/product-details/product-details.component';
import { ProductCarouselComponent } from './components/shop/home/product-carousel/product-carousel.component';
import { ProductVerticalComponent } from './components/shop/products/product-vertical/product-vertical.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MainComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductsComponent,
    PriceComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDialogComponent,
    ProductVerticalComponent,
    ProductCarouselComponent,
    ProductZoomComponent,
    MyAccountComponent,
    ContactComponent,
     AboutUsComponent, 
     FaqComponent,
     ErrorPageComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxImgZoomModule,
    CommonModule,
    SharedModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    NgxImageZoomModule.forRoot(), // <-- Add this line
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ProductDialogComponent,
    ProductZoomComponent

  ],

  entryComponents:[
    ProductDialogComponent,
    ProductZoomComponent
  ],
})
export class AppModule { }
