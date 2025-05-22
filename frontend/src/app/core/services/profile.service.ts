import { environment } from '../../../enviroments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrl = `${environment.apiUrl}/profile`;


  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  updateProfile(data: any): Observable<any> {
    return this.http.put(this.apiUrl, data);
  }
}