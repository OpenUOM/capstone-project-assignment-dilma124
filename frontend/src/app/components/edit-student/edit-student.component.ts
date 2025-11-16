import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentData: any = {};
  studentId: any;

  constructor(private service : AppServiceService, private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.id) {
      this.studentId = navigation.extras.state.id;
      this.getStudentData();
    }
  }

  getStudentData(){
    let student = {
      id : this.studentId
    }
    this.service.getOneStudentData(student).subscribe((response)=>{
      if (response && Array.isArray(response) && response.length > 0) {
        this.studentData = response[0];
      }
    },(error)=>{
      console.log('ERROR getting student data - ', error);
    })
  }

  editStudent(values){
    const updatedStudent = {
      id: this.studentId,
      name: values.name || this.studentData.name,
      age: values.age || this.studentData.age,
      hometown: values.hometown || this.studentData.hometown
    };
    this.service.editStudent(updatedStudent).subscribe((response)=>{
      console.log('Student updated successfully');
      this.router.navigate(['student']);
    },(error)=>{
      console.log('ERROR updating student - ', error);
      alert('Error updating student');
    })
  }
}
