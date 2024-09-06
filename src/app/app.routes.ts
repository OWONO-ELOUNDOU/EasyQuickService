import { Routes } from '@angular/router';

// Angular/Fire module Import
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Components imports
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { LoginComponent } from './Auth/login/login.component';
import { DohoneComponent } from './pages/dohone/dohone.component';
import { ServiceFormComponent } from "./pages/service-form/service-form.component";
import { AdminProfileLayoutComponent } from './Admin/Pages/admin-profile-layout/admin-profile-layout.component';
import { TransactionListLayoutComponent } from './Admin/Pages/transaction-list-layout/transaction-list-layout/transaction-list-layout.component';
import { TaskListLayoutComponent } from './Admin/Pages/task-list-layout/task-list-layout.component';
import { UsersListLayoutComponent } from './Admin/Pages/users-list-layout/users-list-layout.component';
import { CompletedTaskLayoutComponent } from './Admin/Pages/completed-task-layout/completed-task-layout/completed-task-layout.component';

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
      path: 'service-form',
      component: ServiceFormComponent,
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
        path: 'admin',
        component: AdminProfileLayoutComponent,
        title: 'Profile',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'transaction',
        component: TransactionListLayoutComponent,
        title: 'Transaction',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'tasks-list',
        component: TaskListLayoutComponent,
        title: 'Tasks Page',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'completed-task',
        component: CompletedTaskLayoutComponent,
        title: 'Completed Tasks Page',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'users-list',
        component: UsersListLayoutComponent,
        title: 'Users Page',
        ...canActivate(redirectToLogin)
    },
    {
        path: 'dohone',
        component: DohoneComponent,
        title: 'Dohone Payment',
        ...canActivate(redirectToLogin)
    }
];
