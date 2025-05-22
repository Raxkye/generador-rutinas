import { environment } from '../../../enviroments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoutineService {
  private apiUrl = `${environment.apiUrl}/routine`;

  constructor(private http: HttpClient) {}

  createRoutine(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getRoutines(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteRoutine(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateRoutine(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  generateRoutine(): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate`, {});
  }
}