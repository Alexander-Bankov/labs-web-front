import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Task } from "../interfaces/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  get(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.appUrl}/project/${projectId}/task`);
  }

  deleteTaskById(projectId: number | undefined, taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${environment.appUrl}/project/${projectId}/task/${taskId}`);
  }

  setCompleteTask(projectId: number | undefined, taskId: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${environment.appUrl}/project/${projectId}/task/${taskId}`, task);
  }

  createTask(projectId: number | undefined, task: Task): Observable<Task> {
    return this.http.post<Task>(`${environment.appUrl}/project/${projectId}/task`, task);
  }
}
