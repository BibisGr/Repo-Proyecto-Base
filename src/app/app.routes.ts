import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'registro', component: RegFormComponent},
    { path: '**', component: PageNotFoundComponent }, 
];
