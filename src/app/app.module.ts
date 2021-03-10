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
import { ProductLeftSidebarComponent } from './components/shop/products/product-left-sidebar/product-left-sidebar.component';
import { HomeFiveComponent } from './components/shop/home-five/home-five.component';
import { HomeFourComponent } from './components/shop/home-four/home-four.component';
import { HomeThreeComponent } from './components/shop/home-three/home-three.component';
import { ProductCarouselThreeComponent } from './components/shop/home-three/product-carousel-three/product-carousel-three.component';
import { HomeTwoComponent } from './components/shop/home-two/home-two.component';
import { ProductCarouselTwoComponent } from './components/shop/home-two/product-carousel-two/product-carousel-two.component';
import { ProductCarouselComponent } from './components/shop/home/product-carousel/product-carousel.component';
import { ProductVerticalComponent } from './components/shop/products/product-vertical/product-vertical.component';
import { BrandsComponent } from './components/shop/widgets/brands/brands.component';
import { CategoriesComponent } from './components/shop/widgets/categories/categories.component';
import { PopularProductsComponent } from './components/shop/widgets/popular-products/popular-products.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { MatFileUploadModule } from 'angular-material-fileupload';


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
    ProductLeftSidebarComponent,
    ProductVerticalComponent,
    HomeTwoComponent,
    HomeThreeComponent,

    ProductCarouselComponent,
    ProductCarouselTwoComponent,
    ProductCarouselThreeComponent,
    BrandsComponent,
    CategoriesComponent,
    PopularProductsComponent,
    HomeFourComponent,
    ProductZoomComponent,
    HomeFiveComponent,
    MyAccountComponent
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
    MatFileUploadModule

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
