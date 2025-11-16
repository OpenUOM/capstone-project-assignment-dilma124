import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { AppServiceService } from '../../app-service.service';
@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {

  faTrash = faTrash;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  teacherData: any = [];
  selected: any;

  constructor(private service: AppServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initializeDB();
  }

  addNewTeacher() {
    this.router.navigate(['addTeacher']);
  }

  editTeacher(id) {
    if (!id) {
      console.error('Teacher ID is missing');
      return;
    }
    const navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    };
    this.router.navigate(['editTeacher'], navigationExtras);
  }

  initializeDB(){
    this.service.initializeDB().subscribe((response) => {
      console.log('DB initialized');
      this.getTeacherData();
    }, (error) => {
      console.log('ERROR initializing DB - ', error);
      this.getTeacherData();
    })
  }

  getTeacherData() {
    this.selected = 'Teachers';
    this.service.getTeacherData().subscribe((response) => {
      if (response && Object.keys(response).length > 0) {
        this.teacherData = Object.keys(response).map((key) => [response[key]]);
      } else {
        this.teacherData = [];
      }
      console.log('Teacher data loaded:', this.teacherData);
    }, (error) => {
      console.log('ERROR loading teachers - ', error);
      this.teacherData = [];
    })
  }

  getStudentData() {
    this.selected = 'Students';
    this.service.getStudentData().subscribe((response) => {
      this.teacherData = response;
    }, (error) => {
      console.log('ERROR loading students - ', error);
    })
  }

  search(value) {
    let foundItems = [];
    if (value.length <= 0) {
      this.getTeacherData();
    } else {
      this.teacherData.filter((teacher) => {
        if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          foundItems.push(teacher);
        }
      });
      this.teacherData = foundItems;
    }
  }

  deleteTeacher(itemid) {
    if (!itemid) {
      console.error('Teacher ID is missing for delete');
      return;
    }
    
    if (!confirm('Are you sure you want to delete this teacher?')) {
      return;
    }

    const deletePayload = {
      id: itemid
    };
    
    this.service.deleteTeacher(deletePayload).subscribe((response) => {
      console.log('Teacher deleted successfully');
      this.getTeacherData();
    }, (error) => {
      console.log('ERROR deleting teacher - ', error);
      alert('Error deleting teacher');
    })
  }
}