// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './features/auth/login.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RoutineListComponent } from './features/routines/routine-list.component';

import { AuthService } from './core/auth/auth.service';
import { RoutineFormComponent } from './features/routines/routine-form.component';
import { RegisterComponent } from './features/auth/register.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/auth/jwt.interceptor';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RoutineListComponent,
    RegisterComponent,
    RoutineFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // <-- Añadir aquí
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

