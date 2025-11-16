import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {

  constructor(private service : AppServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createStudent(value){
    // Validate inputs
    if (!value.id || !value.name || !value.age || !value.hometown) {
      alert('Please fill in all fields: ID, Name, Age, and Hometown');
      return;
    }

    // Validate age is a number
    const age = parseInt(value.age, 10);
    if (isNaN(age) || age <= 0) {
      alert('Please enter a valid age');
      return;
    }

    const student = {
      id : value.id,
      name : value.name,
      age : age,
      hometown : value.hometown
    }

    console.log('Sending student data to backend:', student);
    this.service.addStudent(student).subscribe((response)=>{
      console.log('Student added successfully', response);
      alert('Student added successfully!');
      this.router.navigate(['student']);
    },(error)=>{
      console.error('ERROR adding student - Full error details:', error);
      console.error('Error status:', error.status);
      console.error('Error message:', error.message);
      console.error('Error response:', error.error);
      
      let errorMsg = 'Error adding student';
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
