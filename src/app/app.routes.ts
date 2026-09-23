import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { NotFound } from './Routing/not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //wildcard route - 404 - not found
  { path: '**', component: NotFound },
];
