import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (this.name && this.email && this.password) {
      this.auth.register({ name: this.name, email: this.email, password: this.password })
        .subscribe({
          next: () => this.router.navigate(['/routines']),
          error: err => console.error(err)
        });
    }
  }
  
}