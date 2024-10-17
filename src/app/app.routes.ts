import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ElencopersoneComponent } from './components/elencopersone/elencopersone.component';

import { DetailComponent } from './components/detail/detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormUserComponent } from './components/form-user/form-user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'user', component: UserComponent },
  { path: 'elenco', component: ElencopersoneComponent },
  { path: 'dettagli/:id', component: DetailComponent },
  { path: 'form', component: FormUserComponent },
  { path: '**', component: PageNotFoundComponent },
];
