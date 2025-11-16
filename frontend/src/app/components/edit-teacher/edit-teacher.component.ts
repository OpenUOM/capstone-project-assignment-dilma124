import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacherData: any = {};
  teacherId: any;

  constructor(private service : AppServiceService, private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.id) {
      this.teacherId = navigation.extras.state.id;
      this.getTeacherData();
    }
  }

  getTeacherData(){
    let teacher = {
      id : this.teacherId
    }
    this.service.getOneTeacherData(teacher).subscribe((response)=>{
      if (response && Array.isArray(response) && response.length > 0) {
        this.teacherData = response[0];
      }
    },(error)=>{
      console.log('ERROR getting teacher data - ', error)
    })
  }

  editTeacher(values){
    // Validate inputs
    const name = values.name || this.teacherData.name;
    const age = values.age || this.teacherData.age;

    if (!name || !age) {
      alert('Please fill in all fields: Name and Age');
      return;
    }

    // Validate age is a number
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum <= 0) {
      alert('Please enter a valid age');
      return;
    }

    const updatedTeacher = {
      id: this.teacherId,
      name: name,
      age: ageNum
    };
    this.service.editTeacher(updatedTeacher).subscribe((response)=>{
      console.log('Teacher updated successfully');
      this.router.navigate(['']);
    },(error)=>{
      console.log('ERROR updating teacher - ', error)
      alert('Error updating teacher. Please check the console.');
    })
  }
}