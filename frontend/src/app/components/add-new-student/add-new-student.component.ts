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

    const student = {
      id : value.id,
      name : value.name,
      age : value.age,
      hometown : value.hometown
    }

    this.service.addStudent(student).subscribe((response)=>{
      console.log('Student added successfully', response);
      this.router.navigate(['student']);
    },(error)=>{
      console.log('ERROR adding student - ', error);
      alert('Error adding student. Please check the console.');
    })
  }
}
