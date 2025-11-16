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
    // Validate inputs
    const name = values.name || this.studentData.name;
    const age = values.age || this.studentData.age;
    const hometown = values.hometown || this.studentData.hometown;

    if (!name || !age || !hometown) {
      alert('Please fill in all fields: Name, Age, and Hometown');
      return;
    }

    // Validate age is a number
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum <= 0) {
      alert('Please enter a valid age');
      return;
    }

    const updatedStudent = {
      id: this.studentId,
      name: name,
      age: ageNum,
      hometown: hometown
    };

    console.log('Sending updated student data to backend:', updatedStudent);
    this.service.editStudent(updatedStudent).subscribe((response)=>{
      console.log('Student updated successfully');
      alert('Student updated successfully!');
      this.router.navigate(['student']);
    },(error)=>{
      console.error('ERROR updating student - Full error details:', error);
      console.error('Error status:', error.status);
      console.error('Error message:', error.message);
      console.error('Error response:', error.error);
      
      let errorMsg = 'Error updating student';
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
