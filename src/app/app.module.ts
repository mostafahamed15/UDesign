import { BrowserModule,Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RouterModule ,Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api'; 
import {CarouselModule} from 'primeng/carousel';
import { NgStyle } from '@angular/common';

//components
import { AppComponent } from './app.component';


//installed services

//my services
import {TranslateLoaderFactory} from './services/translateloader';
import {TitleService} from './services/title.service';
import {CategoryService} from './services/category.service';
import{ FilterService } from './services/filter.service';

import { RequestsInterceptor } from './services/request.service';
import { UrlService } from './services/url.service';
import { AuthService } from './services/auth.service';
import { SlidesService } from './services/slides.service';
import { BrandService } from './services/brand.service';
import {CommonService} from './services/common.service';
import {PostsService} from './services/post.service';
import {ProductService} from './services/product.service';
import { SlickModule } from 'ngx-slick';
import {AdsService} from './services/ads.service';
import { PackageService } from './services/package.service';

import { CookieService } from 'ngx-cookie-service';
import { FinishingService } from './services/finishing.service';
import { UserService } from './services/user.service'
//my guards
import { AuthGuard} from './guards/auth';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendingComponent } from './components/trending/trending.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { BlogComponent } from './components/blog/blog.component';
import { ItemsComponent } from './pages/items/items.component';
import { FinishingComponent } from './pages/finishing/finishing.component';
import { InteriorComponent } from './pages/interior/interior.component';
import { LatestnewsComponent } from './pages/latestnews/latestnews.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { SigninComponent } from './components/header/signin/signin.component';
import { BrandsComponent } from './components/brands/brands.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { InteriorService } from './services/interior.service';
import { PackageComponent } from './components/package/package.component';
import { BrandPageComponent } from './pages/brand-page/brand-page.component';
import { BrandFeaturesComponent } from './components/brand-features/brand-features.component';
import { AboutBrandComponent } from './components/about-brand/about-brand.component';
import { BrandSallesOfComponent } from './components/brand-salles-of/brand-salles-of.component';
import { BrandByCategoryComponent } from './components/brand-by-category/brand-by-category.component';
import { FinishingOfficeComponent } from './pages/finishing/finishing-office/finishing-office.component';
import { InteriorOfficeComponent } from './pages/interior/interior-office/interior-office.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { TryPremiumComponent } from './pages/profile-page/try-premium/try-premium.component';
import { CartService } from './services/cart.service';
import { AllCaregoriesComponent } from './pages/all-caregories/all-caregories.component';
import { SubcatComponent } from './pages/all-caregories/subcat/subcat.component';
import { ProductByCategoriesComponent } from './pages/product-by-categories/product-by-categories.component';
import { PackageWithProductComponent } from './components/package/package-with-product/package-with-product.component';
import { EditProfileComponent } from './pages/profile-page/edit-profile/edit-profile.component';




const ROUTES: Routes = [
   //{path:'signup',component:SignupComponent},
  // {path:'forgot-passowrd',component:ForgotPasswordComponent},
   //{path:'login',component:SigninComponent},
  // {path:'showdetails/:id',component:DetailsComponent},
  {path:'',component:HomeComponent},
  {path: 'product/:id', component: ProductComponent},
     {path:'home',component:HomeComponent},
     {path:'ShoppingCart',component:ShoppingCartComponent},
     {path:'CheckOut',component:CheckOutComponent},
     {path:'brandPage',component:BrandPageComponent},
     {path: 'finishingOffice', component:FinishingOfficeComponent},
     {path: 'interiorOffice', component:InteriorOfficeComponent},
  {path:'profile',component: ProfilePageComponent},
  // {path:'checkout',component: CartComponent},
  // {path:'cart',component: Cart2Component},
  {path:'products',component: ItemsComponent},
   {path:'interior',component: InteriorComponent},
   {path:'finishing',component: FinishingComponent},
  {path:'news',component: LatestnewsComponent},
  //{path:'singlepost',component: SinglepostComponent},
  {path:'contact',component: ContactusComponent},
  {path:'package',component: PackageComponent},
  {path:'AllCaregories',component: AllCaregoriesComponent},
  {path:'Subcat',component: SubcatComponent},
  {path:'categories/:id/products',component: ProductByCategoriesComponent},
  {path: 'Package/:id', component:PackageWithProductComponent},
  {path: 'profile/edit', component: EditProfileComponent}
  // {path:'product/:id',component: SingleproductComponent},

];

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent,
    TrendingComponent,
    
    CategoriesComponent,
    BlogComponent,
    ItemsComponent,
    FinishingComponent,
    InteriorComponent,
    LatestnewsComponent,
    ProfilePageComponent,
    ContactusComponent,
    SigninComponent,
    BrandsComponent,
    AdvertisementsComponent,
    PackageComponent,
    BrandPageComponent,
    BrandFeaturesComponent,
    AboutBrandComponent,
    BrandSallesOfComponent,
    BrandByCategoryComponent,
    FinishingOfficeComponent,
    InteriorOfficeComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    TryPremiumComponent,
    AllCaregoriesComponent,
    SubcatComponent,
    ProductByCategoriesComponent,
    PackageWithProductComponent,
    EditProfileComponent,
  
   
    
  
  
  ],
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SlickModule.forRoot(),
    CarouselModule,
    
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    Title,
    TitleService,
    BrandService,
    CookieService,
    {provide: HTTP_INTERCEPTORS,useClass:RequestsInterceptor,multi: true},
    UrlService,
    AuthService,
    AuthGuard,
    SlidesService,
    CategoryService,
    CommonService,
    PostsService,
    ProductService,
    AdsService,
    InteriorService,
    FinishingService,
    PackageService,
    UserService,
    CartService,
    FilterService


  ],
  entryComponents:[
    HeaderComponent,
    
    TryPremiumComponent,
    AppComponent,
    SigninComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
