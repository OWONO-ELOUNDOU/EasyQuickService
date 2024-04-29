import { Routes } from '@angular/router';

// Angular/Fire module Import
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Components imports
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceListComponent } from './pages/service-list/service-list.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { LoginComponent } from './Auth/login/login.component';
import { ProfileComponent } from './pages/Profile_pages/profile/profile.component';
import { UserInfoComponent } from './pages/Profile_pages/user-info/user-info.component';
import { HistoryComponent } from './pages/Profile_pages/history/history.component';
import { FinishComponent } from './Components/finish/finish.component';
import { DohoneComponent } from './pages/dohone/dohone.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page',
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
        path: 'signup',
        component: SignupComponent,
        title: 'SignUp Page',
        // ...canActivate(redirectToHome)
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page',
        ...canActivate(redirectToHome)
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'User Profile',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'user',
        component: UserInfoComponent,
        title: 'User Info',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'history',
        component: HistoryComponent,
        title: 'History',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'finish',
        component: FinishComponent,
        title: 'Confirmation',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'dohone',
        component: DohoneComponent,
        title: 'Dohone Payment',
        ...canActivate(redirectToLogin)
    }
];
