import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/login.component';
import { RegisterComponent } from './features/auth/register.component';
import { RoutineListComponent } from './features/routines/routine-list.component';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'routines', component: RoutineListComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];
