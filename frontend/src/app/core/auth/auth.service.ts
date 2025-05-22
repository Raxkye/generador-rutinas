// src/app/core/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  register(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/user/register`, data, { responseType: 'json' }).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem(this.tokenKey, res.token);
        }
      })
    );
  }

  login(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/user/login`, data, { responseType: 'json' }).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem(this.tokenKey, res.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}