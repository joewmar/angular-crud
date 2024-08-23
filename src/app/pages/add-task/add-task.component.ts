import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { error } from 'console';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskForm: FormGroup;

  // init FormGroup
  constructor(private _fb: FormBuilder, private _empService: TasksService, private _dialogRef: DialogRef) {
    // Data binding
    this.taskForm = this._fb.group({
      task: '',
    })
  }

  addTask(){
    if(this.taskForm.valid){
      // console.log(this.taskForm.value);

      this._empService.addTask(this.taskForm.valid).subscribe({
        next: (data: any) => {
          alert("Task added successfully");
          this._dialogRef.close();
        },
        error: (e: any) => {
          console.log(e);
        }
      })
    }
  }
}
