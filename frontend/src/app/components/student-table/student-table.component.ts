import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import {AppServiceService} from '../../app-service.service';
@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  faTrash = faTrash;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  studentData: any = [];
  selected: any;

  constructor(private service : AppServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initializeDB();
  }

  addNewStudent(){
    this.router.navigate(['addStudent']);
  }

  editStudent(id){
    if (!id) {
      console.error('Student ID is missing');
      return;
    }
    const navigationExtras: NavigationExtras = {
      state: {
        id : id
      }
    };
    this.router.navigate(['editStudent'], navigationExtras);
  }

  initializeDB(){
    this.service.initializeDB().subscribe((response) => {
      console.log('DB initialized');
      this.getStudentData();
    }, (error) => {
      console.log('ERROR initializing DB - ', error);
      this.getStudentData();
    })
  }

  getStudentData(){
    this.service.getStudentData().subscribe((response)=>{
      if (response && Object.keys(response).length > 0) {
        this.studentData = Object.keys(response).map((key) => [response[key]]);
      } else {
        this.studentData = [];
      }
      console.log('Student data loaded:', this.studentData);
    },(error)=>{
      console.log('ERROR loading students - ', error);
      this.studentData = [];
    })
  }

  deleteStudent(itemid){
    if (!itemid) {
      console.error('Student ID is missing for delete');
      return;
    }

    if (!confirm('Are you sure you want to delete this student?')) {
      return;
    }

    const student = {
      id: itemid
    };
    
    this.service.deleteStudent(student).subscribe((response)=>{
      console.log('Student deleted successfully');
      this.getStudentData();
    },(error)=>{
      console.log('ERROR deleting student - ', error);
      alert('Error deleting student');
    })
  }

  search(value) {
    let foundItems = [];
    if (value.length <= 0) {
      this.getStudentData();
    } else {
      this.studentData.filter((student) => {
        if (student[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          foundItems.push(student);
        }
      });
      this.studentData = foundItems;
    }
  }
}
