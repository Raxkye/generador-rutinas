// frontend/src/app/features/routine/routine.component.ts
import { Component, OnInit } from '@angular/core';
import { RoutineService } from 'app/core/services/routine.service';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineListComponent implements OnInit {
  routines: any[] = [];
  error: string = '';

  constructor(private routineService: RoutineService) {}

  ngOnInit(): void {
    this.routineService.getRoutines().subscribe({
      next: (res: any) => this.routines = res,
      error: () => this.error = 'Error al cargar las rutinas'
    });
  }

  generarNuevaRutina(): void {
    this.routineService.generateRoutine().subscribe({
      next: (data: any) => {
        this.routines.push(data);
        this.error = '';
      },
      error: () => this.error = 'Error al generar rutina'
    });
  }

  deleteRoutine(id: string): void {
    this.routineService.deleteRoutine(id).subscribe({
      next: () => this.routines = this.routines.filter(r => r._id !== id),
      error: () => this.error = 'Error al eliminar rutina'
    });
  }
}
