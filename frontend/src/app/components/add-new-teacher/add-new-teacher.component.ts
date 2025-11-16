import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-teacher',
  templateUrl: './add-new-teacher.component.html',
  styleUrls: ['./add-new-teacher.component.css']
})
export class AddNewTeacherComponent implements OnInit {

  constructor(private service : AppServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createTeacher(value){
    // Validate inputs
    if (!value.id || !value.name || !value.age) {
      alert('Please fill in all fields: ID, Name, and Age');
      return;
    }

    // Validate age is a number
    const age = parseInt(value.age, 10);
    if (isNaN(age) || age <= 0) {
      alert('Please enter a valid age');
      return;
    }

    const teacher = {
      id : value.id,
      name : value.name,
      age : age
    }

    console.log('Sending teacher data to backend:', teacher);
    this.service.addTeacher(teacher).subscribe((response)=>{
      console.log('Teacher added successfully', response);
      alert('Teacher added successfully!');
      this.router.navigate(['']);
    },(error)=>{
      console.error('ERROR adding teacher - Full error details:', error);
      console.error('Error status:', error.status);
      console.error('Error message:', error.message);
      console.error('Error response:', error.error);
      
      let errorMsg = 'Error adding teacher';
      if (error.status === 0) {
        errorMsg = 'Cannot connect to backend server. Please ensure the backend is running on port 3000.';
      } else if (error.error && error.error.error) {
        errorMsg = error.error.error;
      } else if (error.message) {
        errorMsg = error.message;
      }
      
      alert(errorMsg);
    })
  }
}
