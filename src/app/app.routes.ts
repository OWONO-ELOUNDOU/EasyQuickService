import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './Auth/login/login.component';
import { ServiceListComponent } from './pages/service-list/service-list.component';
import { SignupComponent } from './Auth/signup/signup.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'service-list', component: ServiceListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
