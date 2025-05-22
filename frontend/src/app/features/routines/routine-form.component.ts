import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RoutineService } from '../../core/services/routine.service';


@Component({
  selector: 'app-routine-form',
  templateUrl: './routine-form.component.html',
  styleUrls: ['./routine-form.component.scss']
})
export class RoutineFormComponent {
  name = '';
  activities = [{ title: '', day: '', startTime: '', endTime: '' }];
  success = '';
  error = '';

  constructor(private routineService: RoutineService) {}

  addActivity() {
    this.activities.push({ title: '', day: '', startTime: '', endTime: '' });
  }

  removeActivity(index: number) {
    this.activities.splice(index, 1);
  }

onSubmit() {
  const activities = this.activities.map(a => ({
    title: a.title,
    day: a.day,
    time: `${a.startTime}-${a.endTime}`
  }));

  const routine = { name: this.name, activities };

  this.routineService.createRoutine(routine).subscribe({
    next: () => {
      this.success = 'Rutina creada correctamente';
      this.error = '';
    },
    error: () => {
      this.error = 'Error al crear rutina';
      this.success = '';
    }
  });
}

}