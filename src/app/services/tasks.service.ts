import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }

  addTask(data: any){
    return this._http.post("http://localhost:3000/tasks", data);
  }
}
