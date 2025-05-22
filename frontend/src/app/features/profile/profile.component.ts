// frontend/src/app/features/profile/profile.component.ts
import { Component } from '@angular/core';
import { ProfileService } from 'app/core/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  interests: string = '';
  goals: string = '';
  disponibilidad: { [key: string]: string[] } = {
    lunes: [], martes: [], miercoles: [], jueves: [], viernes: [], sabado: [], domingo: []
  };
  diaSeleccionado: string = 'lunes';
  nuevaFranja: string = '';
  success: string = '';
  error: string = '';

  constructor(private profileService: ProfileService) {}

  agregarFranja() {
    if (this.nuevaFranja.trim()) {
      this.disponibilidad[this.diaSeleccionado].push(this.nuevaFranja.trim());
      this.nuevaFranja = '';
    }
  }

  eliminarFranja(dia: string, index: number) {
    this.disponibilidad[dia].splice(index, 1);
  }

  onSubmit(): void {
    const profileData = {
      interests: this.interests,
      goals: this.goals,
      disponibilidad: this.disponibilidad
    };

    this.profileService.updateProfile(profileData).subscribe({
      next: () => {
        this.success = 'Perfil actualizado correctamente';
        this.error = '';
      },
      error: () => {
        this.error = 'Error al actualizar perfil';
        this.success = '';
      }
    });
  }
}
