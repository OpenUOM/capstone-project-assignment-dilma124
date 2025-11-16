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

    this.service.addTeacher(teacher).subscribe((response)=>{
      console.log('Teacher added successfully', response);
      this.router.navigate(['']);
    },(error)=>{
      console.log('ERROR adding teacher - ', error)
      alert('Error adding teacher. Please check the console.');
    })
  }
}
