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

//components
import { AppComponent } from './app.component';


//installed services

//my services
import {TranslateLoaderFactory} from './services/translateloader';
import {TitleService} from './services/title.service';
import {CategoryService} from './services/category.service';

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
import { NewFeaturedTopratedComponent } from './components/new-featured-toprated/new-featured-toprated.component';
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


const ROUTES: Routes = [
  // {path:'signup',component:SignupComponent},
  // {path:'forgot-passowrd',component:ForgotPasswordComponent},
   //{path:'login',component:SigninComponent},
  // {path:'showdetails/:id',component:DetailsComponent},
  {path:'',component:HomeComponent},
     {path:'home',component:HomeComponent},
     {path:'brandPage',component:BrandPageComponent},

  {path:'profile',component: ProfilePageComponent},
  // {path:'checkout',component: CartComponent},
  // {path:'cart',component: Cart2Component},
  {path:'products',component: ItemsComponent},
   {path:'interior',component: InteriorComponent},
   {path:'finishing',component: FinishingComponent},
  {path:'news',component: LatestnewsComponent},
  // {path:'singlepost',component: SinglepostComponent},
  {path:'contact',component: ContactusComponent},
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
    NewFeaturedTopratedComponent,
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
    UserService


  ],
  entryComponents:[
    HeaderComponent,
    
   
    AppComponent,
    SigninComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
