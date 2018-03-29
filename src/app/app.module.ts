import { BrowserModule,Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RouterModule ,Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component'

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

import { CookieService } from 'ngx-cookie-service';

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

const ROUTES: Routes = [
  // {path:'signup',component:SignupComponent},
  // {path:'forgot-passowrd',component:ForgotPasswordComponent},
  // {path:'login',component:SigninComponent},
  // {path:'showdetails/:id',component:DetailsComponent},
  {path:'',component:HomeComponent},
     {path:'home',component:HomeComponent},

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
    ProductService


  ],
  entryComponents:[
    HeaderComponent,
   
    AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
