import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddTaskComponent } from '../../pages/add-task/add-task.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private _dialog: MatDialog) {}

  openDialogAddTask() {
    this._dialog.open(AddTaskComponent);
  }
}
