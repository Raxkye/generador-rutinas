// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RoutineListComponent } from './features/routines/routine-list.component';
import { AuthGuard } from './core/auth/auth.guard';
import { RegisterComponent } from './features/auth/register.component';
import { RoutineFormComponent } from './features/routines/routine-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'nueva-rutina',
    component: RoutineFormComponent,
    canActivate: [AuthGuard]
  }
  ,
  { path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'rutinas', component: RoutineListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
