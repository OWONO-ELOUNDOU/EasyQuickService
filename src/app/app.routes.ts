import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './Auth/login/login.component';
import { ServiceListComponent } from './pages/service-list/service-list.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { PartnerComponent } from './pages/partner/partner.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact Page'
    },
    {
        path: 'service-list',
        component: ServiceListComponent,
        title: 'Service Page'
    },
    {
        path: 'partner',
        component: PartnerComponent,
        title: 'Partner Page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'SignUp Page'
    }
];
