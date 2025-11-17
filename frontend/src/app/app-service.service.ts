import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    // In development (ng serve), proxy will route /test to localhost:3000 and /api to localhost:8080
    // In production (ng build), should use actual backend URL
    if(environment.production === false){
      this.ROOT_URL = 'test'; // Routes through proxy to localhost:3000
    }else{
      this.ROOT_URL = 'api'; // Routes through proxy to localhost:8080
    }
  }

  initializeDB(){
    return this.http.get(`/${this.ROOT_URL}/dbinitialize`)
  }

  getTeacherData(){
    return this.http.get(`/${this.ROOT_URL}/listTeachers`)
  }

  getStudentData(){
    return this.http.get(`/${this.ROOT_URL}/listStudents`)
  }

  getOneStudentData(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/getStudentInfo`, payload)
  }

  getOneTeacherData(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/getTeacherInfo`, payload)
  }

  addTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/addTeacher`, payload)
  }

  deleteTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/deleteTeacher`, payload)
  }

  editTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/editTeacher`, payload)
  }

  editStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/editStudent`, payload)
  }

  addStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/addStudent`, payload)
  }

  deleteStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/deleteStudent`, payload)
  }
}