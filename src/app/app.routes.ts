import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

export const routes: Routes = [
  {path :'',redirectTo:'home' ,pathMatch :'full'},
  {path :'home',component:HomeComponent,title:"Home"},
  {path :'about',component:AboutComponent,title:"About"},
  {path :'services',component:ServicesComponent,title:"Services"},
  {path :'portfolio',component:PortfolioComponent,title:"Portfolio"},
  {path :'testimonials',component:TestimonialsComponent,title:"Testimonials"},
  {path :'contact',component:ContactComponent,title:"Contact"},
  {path :'**',component:NotfoundComponent,title:"NotFound"},
];
