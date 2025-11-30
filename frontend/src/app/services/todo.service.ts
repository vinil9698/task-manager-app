import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  async getTodos() {
    try {
      return await firstValueFrom(this.http.get(`${environment.apiUrl}/todos/`))
    } catch (error) {
      throw error;
    }
  }

  async createTodo(data: any) {
    try {
      return await firstValueFrom(this.http.post(`${environment.apiUrl}/todos/`, data))
    } catch (error) {
      throw error;
    }
  }

  async updateTodo(id: number, data: any) {
    try {
      return await firstValueFrom(this.http.put(`${environment.apiUrl}/todos/${id}`, data))
    } catch (error) {
      throw error;
    }
  }
  
  async deleteTodo(id: number) {
    try {
      return await firstValueFrom(this.http.delete(`${environment.apiUrl}/todos/${id}`))
    } catch (error) {
      throw error;
    }
  }
}