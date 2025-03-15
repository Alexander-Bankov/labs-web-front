import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Project } from "../interfaces/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  get(id: number): Observable<Project> {
    return this.http.get<Project>(`${environment.appUrl}/projects/${id}`);
  }

  getAll(filter: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.appUrl}/projects?search=${filter}`);
  }

  getOpenedTask(): Observable<Object> {
    return this.http.get<Object>(`${environment.appUrl}/projects/countUncompletedTasks`);
  }

  updateProject(id: number, project: Project): Observable<Object> {
    return this.http.put<Project>(`${environment.appUrl}/projects/${id}`, project);
  }

  createProject(project: Project): Observable<Object> {
    return this.http.post<Project>(`${environment.appUrl}/projects`, project);
  }

  deleteById(id: number | undefined): Observable<Object> {
    return this.http.delete<Object>(`${environment.appUrl}/projects/${id}`);
  }
}
