# Implementing the Frontend

In this section we will be implementing the frontend of the Student Management System and connecting it with the backend features we created in the "Implementing the Backend" section.

This guide sequentially explains how to implement the frontend of the capstone project.

---

## Overview

The frontend implementation consists of 4 main parts:

1. **Services** - For communicating with the backend
2. **Routing** - For navigating between different views
3. **Navigation** - For the navbar component
4. **Components** - For displaying data and handling user interactions

---

## Part 1: Services

### Purpose of Services

A component shouldn't fetch data from the server directly. It should only know how to present the fetched data. To decouple fetching the data and presenting the data, Angular uses **Services**.

Services act as an **intermediate layer** between the frontend and the backend.

### Creating a Service from Scratch

To create an Angular Service from scratch, use the Angular CLI:

```bash
ng generate service app-service
```

This command creates two files:
- `app-service.service.ts` - The service class
- `app-service.service.spec.ts` - The test file

### Service Implementation

The service file is located at `src/app/app-service.service.ts`.

#### Service Class Structure

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    // Configure ROOT_URL based on environment
    if(environment.production === false){
      this.ROOT_URL = 'test'; // Routes through proxy
    }else{
      this.ROOT_URL = 'api'; // Routes through proxy
    }
  }
  
  // Service methods will be added here
}
```

#### Understanding the Service Decorator

```typescript
@Injectable({
  providedIn: 'root'
})
```

**Explanation:**
- The `@Injectable` decorator marks the `AppServiceService` class as a class that participates in the dependency injection system
- The metadata `providedIn: 'root'` registers a provider with the root injector for the service
- This means the service will be provided at the root level and Angular creates a single instance of the service that is shared with any class that requests it

#### ROOT_URL Configuration

```typescript
readonly ROOT_URL: string;

constructor(private http: HttpClient) {
  this.ROOT_URL = 'http://localhost:8080'
}
```

**Explanation:**
- The `readonly` variable called `ROOT_URL` specifies the root/base URL of the backend
- The `HttpClient` instance called `http` is injected into the constructor
- In development, `http://localhost:8080` is used (or proxied through development server)

### Service Methods for Teacher CRUD Operations

#### 1. Retrieve All Teachers (GET)

```typescript
getTeacherData(){
  return this.http.get(`/${this.ROOT_URL}/listTeachers`)
}
```

**Explanation:**
- The `get()` method of the `HttpClient` module constructs an observable
- When subscribed, it causes the configured GET request to execute on the server
- Returns an observable that emits the list of all teachers

**HTTP Request:**
```
GET http://localhost:8080/listTeachers
```

#### 2. Retrieve a Single Teacher (POST)

```typescript
getOneTeacherData(payload: Object){
  return this.http.post(`/${this.ROOT_URL}/getTeacherInfo`, payload)
}
```

**Explanation:**
- The `post()` method of the `HttpClient` module is used to send data in the request body
- The necessary data for the request (teacher's id) is passed as a JavaScript object
- The server uses the id to identify and return a specific teacher

**HTTP Request:**
```
POST http://localhost:8080/getTeacherInfo
Body: { "id": "teacher_id" }
```

#### 3. Add/Create a Teacher (POST)

```typescript
addTeacher(payload: Object){
  return this.http.post(`/${this.ROOT_URL}/addTeacher`, payload)
}
```

**Explanation:**
- The `post()` method sends a POST request to add a new teacher to the database
- The payload contains the new teacher's details (id, name, age)

**HTTP Request:**
```
POST http://localhost:8080/addTeacher
Body: { "id": "T001", "name": "John Doe", "age": 35 }
```

#### 4. Update Teacher Details (POST)

```typescript
editTeacher(payload: Object){
  return this.http.post(`/${this.ROOT_URL}/editTeacher`, payload)
}
```

**Explanation:**
- The `post()` method sends a POST request to update an existing teacher's details
- The payload contains the teacher's id and the fields to update (name, age)

**HTTP Request:**
```
POST http://localhost:8080/editTeacher
Body: { "id": "T001", "name": "Jane Smith", "age": 38 }
```

#### 5. Delete a Teacher (POST)

```typescript
deleteTeacher(payload: Object){
  return this.http.post(`/${this.ROOT_URL}/deleteTeacher`, payload)
}
```

**Explanation:**
- The `post()` method sends a POST request to delete a teacher from the database
- The payload contains only the teacher's id

**HTTP Request:**
```
POST http://localhost:8080/deleteTeacher
Body: { "id": "teacher_id" }
```

### Service Methods for Student CRUD Operations

Similar methods are implemented for the Student entity:

```typescript
getStudentData(){
  return this.http.get(`/${this.ROOT_URL}/listStudents`)
}

getOneStudentData(payload: Object){
  return this.http.post(`/${this.ROOT_URL}/getStudentInfo`, payload)
}

addStudent(payload: Object){
  return this.http.post(`/${this.ROOT_URL}/addStudent`, payload)
}

editStudent(payload: Object){
  return this.http.post(`/${this.ROOT_URL}/editStudent`, payload)
}

deleteStudent(payload: Object){
  return this.http.post(`/${this.ROOT_URL}/deleteStudent`, payload)
}
```

### Utility Methods

```typescript
initializeDB(){
  return this.http.get(`/${this.ROOT_URL}/dbinitialize`)
}
```

---

## Part 2: Routing

### Purpose of Routing

Routing is the mechanism that tells the browser what to load when a specific URL is called. This is essential in any website that has multiple UIs (User Interfaces).

Angular provides an in-built routing module called the **RouterModule**, which is used to handle the routing of the frontend.

### Creating a Router from Scratch

To create a router from scratch via the Angular CLI:

```bash
ng generate module app-routing --flat --module=app
```

**Parameters:**
- `--flat` - Puts the file in `src/app` instead of its own folder
- `--module=app` - Tells the CLI to register it in the imports array of the `AppModule`

### Router Implementation

The app-routing router is located at `src/app/app-routing.module.ts`.

#### Router Configuration

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewTeacherComponent } from './components/add-new-teacher/add-new-teacher.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { DbInitializeComponent } from './components/db-initialize/db-initialize.component';

const routes: Routes = [
  { path: '', component: TeacherTableComponent },
  { path: 'student', component: StudentTableComponent },
  { path: 'addTeacher', component: AddNewTeacherComponent },
  { path: 'addStudent', component: AddNewStudentComponent },
  { path: 'editStudent', component: EditStudentComponent },
  { path: 'editTeacher', component: EditTeacherComponent },
  { path: 'dbinitialize', component: DbInitializeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### Understanding the Router Configuration

**Imports:**
```typescript
import { Routes, RouterModule } from '@angular/router';
import { AddNewTeacherComponent } from './components/add-new-teacher/add-new-teacher.component';
// ... other component imports
```
- The `Routes` and `RouterModule` modules are imported from the `@angular/router` module
- These are used to implement the routing functionality
- Component imports specify which component to load for each route

**Routes Array:**
```typescript
const routes: Routes = [
  { path: '', component: TeacherTableComponent },
  { path: 'addTeacher', component: AddNewTeacherComponent },
  { path: 'editTeacher', component: EditTeacherComponent }
];
```

**Route Configuration:**

| Path | Component | Purpose |
|------|-----------|---------|
| `` (empty) | TeacherTableComponent | Home page - list all teachers |
| `student` | StudentTableComponent | List all students |
| `addTeacher` | AddNewTeacherComponent | Add new teacher form |
| `addStudent` | AddNewStudentComponent | Add new student form |
| `editTeacher` | EditTeacherComponent | Edit teacher form |
| `editStudent` | EditStudentComponent | Edit student form |
| `dbinitialize` | DbInitializeComponent | Database initialization |

**Explanation:**
- The `path` parameter specifies the route URL
- The `component` parameter specifies the component to load at that route
- The empty path `''` is the default route (home page)

**Important:** The component specified in the route with an empty path `''` will be loaded at the base URL.

#### Router Module Configuration

```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

**Explanation:**
- The `@NgModule` decorator marks the class as an NgModule
- It supplies configuration metadata for the class
- `RouterModule.forRoot(routes)` tells Angular that this is the root routing module
- The `imports` array registers the router with the application
- The `exports` array makes the RouterModule available throughout the application

### Router Outlet in Main Template

In the main application component (`app.component.html`), add the router outlet:

```html
<router-outlet></router-outlet>
```

**Explanation:**
- The `<router-outlet></router-outlet>` is the selector for the Router
- When the app is served, the Router will dynamically load components into this location based on the current route
- The component that corresponds to the current route will be rendered inside this tag

---

## Part 3: Navigation

### Purpose of Navigation

The navigation panel helps users navigate between different views (Teachers, Students, etc.) in the application.

### Navbar Component

The navbar component is located in `src/app/components/navbar/navbar.component.ts`.

#### Navbar Component TypeScript

```typescript
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() title: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
```

#### Understanding the Navbar Component

**Router Import:**
```typescript
import { Router } from '@angular/router';
```
- The `Router` component we exported in the Routing section is imported here
- It provides navigation functionality to navigate between routes

**Input Decorator:**
```typescript
@Input() title: string;
```

**Explanation:**
- The component receives the page title as input from its parent component
- The `@Input()` decorator enables one-way data binding
- The parent component passes a string value that is displayed in the navbar
- To use this decorator, `Input` must be imported from `@angular/core`

**Constructor:**
```typescript
constructor(private router: Router) { }
```
- The `Router` is injected into the component
- This allows the component to navigate to different routes when needed

#### Navbar Component Template

The navbar template is located at `src/app/components/navbar/navbar.component.html`:

```html
<div class="navbar-container">
    <div class="logo-container">
        <img width="80px" src="http://placehold.jp/18/ffffff/000000/120x120.png?text=LOGO">
    </div>
  
    <div class="links-container">
        <a routerLink="" [ngClass]="{bold : title=='Teachers'}">Teachers</a>
        <p>|</p>
        <a routerLink="student" [ngClass]="{bold : title=='Students'}">Students</a>
    </div>
    <div class="blank-space"></div>
</div>

<div class="info-container">
    <div class="logo-container">
        <p class="info-text">{{title}}</p>
    </div>
    <div class="blank-space"></div>
    <div class="links-container">
    </div>
</div>
```

#### Understanding the Navbar Template

**Navigation Links:**
```html
<a routerLink="" [ngClass]="{bold : title=='Teachers'}">Teachers</a>
<a routerLink="student" [ngClass]="{bold : title=='Students'}">Students</a>
```

**Explanation:**
- `routerLink` links the anchor tag to the route specified
- When clicked, navigates to the specified route
- `routerLink=""` navigates to the home page (TeacherTableComponent)
- `routerLink="student"` navigates to the student page (StudentTableComponent)

**Dynamic CSS Classes:**
```html
[ngClass]="{bold : title=='Teachers'}"
```

**Explanation:**
- `[ngClass]` is a property binding method in Angular to add/remove CSS classes to/from an element
- The condition `title=='Teachers'` is evaluated
- If true, the `bold` class is applied to the anchor tag
- This highlights the current active navigation link

**Title Display:**
```html
<p class="info-text">{{title}}</p>
```

**Explanation:**
- `{{ title }}` is Angular's string interpolation syntax
- It displays the value of the `title` property received as input
- The title changes based on which component is using the navbar

### Using the Navbar in Components

The navbar is included in component templates with the title property:

```html
<app-navbar title="Teachers"></app-navbar>
<app-navbar title="Add New Teacher"></app-navbar>
<app-navbar title="Edit Teacher Details"></app-navbar>
```

---

## Part 4: Components

### Component Structure

Each component consists of:
- **TypeScript file** (`.component.ts`) - Component logic
- **Template file** (`.component.html`) - HTML markup
- **Style file** (`.component.css`) - Component styles
- **Spec file** (`.component.spec.ts`) - Unit tests

### Component 1: Add New Teacher

#### Location
`src/app/components/add-new-teacher/`

#### Component TypeScript

```typescript
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-new-teacher',
    templateUrl: './add-new-teacher.component.html',
    styleUrls: ['./add-new-teacher.component.css']
})
export class AddNewTeacherComponent implements OnInit {

    constructor(private service: AppServiceService, private router: Router) { }

    ngOnInit(): void {
    }

    createTeacher(value) {
        // Validate inputs
        if (!value.id || !value.name || !value.age) {
            alert('Please fill in all fields');
            return;
        }

        const teacher = {
            id: value.id,
            name: value.name,
            age: value.age
        }

        this.service.addTeacher(teacher).subscribe(
            (response) => {
                // Success callback
                alert('Teacher added successfully!');
                this.router.navigate(['']); // Navigate to home
            },
            (error) => {
                // Error callback
                console.log('ERROR - ', error);
                alert('Error adding teacher');
            }
        )
    }
}
```

#### Understanding the Component

**Component Decorator:**
```typescript
@Component({
    selector: 'app-add-new-teacher',
    templateUrl: './add-new-teacher.component.html',
    styleUrls: ['./add-new-teacher.component.css']
})
```

**Explanation:**
- `selector` - The component's CSS element selector (used as `<app-add-new-teacher></app-add-new-teacher>`)
- `templateUrl` - The location of the component's template file
- `styleUrls` - The location of the component's private CSS styles

**Constructor:**
```typescript
constructor(private service: AppServiceService, private router: Router) { }
```

**Explanation:**
- `AppServiceService` is injected as a private service instance
- `Router` is injected to enable navigation after successful submission
- Dependency injection provides these instances to the component

**createTeacher Method:**
```typescript
createTeacher(value) {
    const teacher = {
        id: value.id,
        name: value.name,
        age: value.age
    }
    
    this.service.addTeacher(teacher).subscribe(
        (response) => {
            this.router.navigate([''])
        },
        (error) => {
            console.log('ERROR - ', error)
        }
    )
}
```

**Explanation:**
- Creates a teacher object from the form values
- Calls the `addTeacher()` service method to send a POST request
- The `subscribe()` method receives the response asynchronously
- **First callback (success)**: Navigates to home page after successful creation
- **Second callback (error)**: Logs error to console if request fails

**Why subscribe()?**
- Server requests take time to complete
- The `subscribe()` method handles asynchronous responses
- When the server responds, the appropriate callback is executed
- This prevents the code from executing before the response is received

#### Component Template

```html
<app-navbar title="Add New Teacher"></app-navbar>
<div>
    <form #addTeacherForm="ngForm" class="form-container" 
          (ngSubmit)="createTeacher(addTeacherForm.value)">
        <input id="teacher-id" ngModel name="id" type="text" placeholder="ID">
        <input id="teacher-name" ngModel name="name" type="text" placeholder="Name">
        <input id="teacher-age" ngModel name="age" type="text" placeholder="Age">
        <button id="teacher-add" class="form-button">Create</button>
    </form>
</div>
```

**Explanation:**
- `<app-navbar title="Add New Teacher"></app-navbar>` - Navbar with title
- `#addTeacherForm="ngForm"` - Template reference variable for form
- `ngModel` - Two-way data binding for form inputs
- `(ngSubmit)="createTeacher(addTeacherForm.value)"` - Calls createTeacher when form is submitted
- Form values are passed to the component method

### Component 2: Edit Teacher

#### Location
`src/app/components/edit-teacher/`

#### Component TypeScript

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
    selector: 'app-edit-teacher',
    templateUrl: './edit-teacher.component.html',
    styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
    
    teacherData: any;
    
    constructor(private service: AppServiceService, private router: Router) { }

    navigation = this.router.getCurrentNavigation();
    
    ngOnInit(): void {
        this.getTeacherData();
    }
    
    getTeacherData() {
        let teacher = {
            id: this.navigation.extras.state.id
        }
        this.service.getOneTeacherData(teacher).subscribe(
            (response) => {
                this.teacherData = response[0];
            },
            (error) => {
                console.log('ERROR - ', error)
            }
        )
    }
    
    editTeacher(values) {
        values.id = this.navigation.extras.state.id;
        this.service.editTeacher(values).subscribe(
            (response) => {
                alert('Teacher updated successfully!');
                this.router.navigate(['']); // Navigate to home
            },
            (error) => {
                console.log('ERROR - ', error)
            }
        )
    }
}
```

#### Understanding the Component

**Getting Navigation State:**
```typescript
navigation = this.router.getCurrentNavigation();
```

**Explanation:**
- `getCurrentNavigation()` retrieves the current navigation object
- Contains extra state data passed from the previous component
- Used to get the teacher id that was passed during navigation

**ngOnInit Lifecycle Hook:**
```typescript
ngOnInit(): void {
    this.getTeacherData();
}
```

**Explanation:**
- Angular calls `ngOnInit()` after component initialization
- This is where we fetch the teacher data to pre-fill the form

**getTeacherData Method:**
```typescript
getTeacherData() {
    let teacher = {
        id: this.navigation.extras.state.id
    }
    this.service.getOneTeacherData(teacher).subscribe(
        (response) => {
            this.teacherData = response[0];
        },
        (error) => {
            console.log('ERROR - ', error)
        }
    )
}
```

**Explanation:**
- Retrieves the teacher id from navigation state
- Calls service method to fetch teacher details from backend
- On success, stores the response in `teacherData` variable
- The data is used to pre-fill the form

**editTeacher Method:**
```typescript
editTeacher(values) {
    values.id = this.navigation.extras.state.id;
    this.service.editTeacher(values).subscribe(
        (response) => {
            this.router.navigate(['']);
        },
        (error) => {
            console.log('ERROR - ', error)
        }
    )
}
```

**Explanation:**
- Receives form values from the template
- Adds the teacher id from navigation state
- Calls service method to update teacher in backend
- On success, navigates back to home page

#### Component Template

```html
<app-navbar title="Edit Teacher Details"></app-navbar>
<div>
    <form #editTeacherForm="ngForm" class="form-container" 
          (ngSubmit)="editTeacher(editTeacherForm.value)">
        <input id="teacher-name" ngModel name="name" type="text" 
               placeholder="Name" value="{{teacherData?.name}}">
        <input id="teacher-age" ngModel name="age" type="text" 
               placeholder="Age" value="{{teacherData?.age}}">
        <button id="teacher-edit" class="form-button">Edit & Save</button>
    </form>
</div>
```

**Explanation:**
- `<app-navbar title="Edit Teacher Details"></app-navbar>` - Navbar with title
- `value="{{teacherData?.name}}"` - Pre-fills form with teacher data
- `?.` - Safe navigation operator (prevents error if teacherData is null/undefined)
- Form values are passed to editTeacher method on submission

### Component 3: Teacher Table

#### Location
`src/app/components/teacher-table/`

#### Component TypeScript

```typescript
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
        this.router.navigate(['addTeacher'])
    }

    editTeacher(id) {
        const navigationExtras: NavigationExtras = {
            state: {
                id: id
            }
        };
        this.router.navigate(['editTeacher'], navigationExtras)
    }

    initializeDB() {
        this.service.initializeDB().subscribe((response) => {
            this.getTeacherData();
        }, (error) => {
            this.getTeacherData();
        })
    }

    getTeacherData() {
        this.selected = 'Teachers';
        this.service.getTeacherData().subscribe((response) => {
            this.teacherData = Object.keys(response).map((key) => [response[key]]);
        }, (error) => {
            console.log('ERROR - ', error)
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
        if (!confirm('Are you sure you want to delete this teacher?')) {
            return;
        }

        const deletePayload = {
            id: itemid
        };
        
        this.service.deleteTeacher(deletePayload).subscribe((response) => {
            this.getTeacherData()
        }, (error) => {
            console.log('ERROR - ', error)
        })
    }
}
```

#### Understanding the Component

**FontAwesome Icons:**
```typescript
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';

faTrash = faTrash;
faPlus = faPlus;
faPenSquare = faPenSquare;
```

**Explanation:**
- Icons are imported from the FontAwesome package
- `faTrash` - Delete icon
- `faPlus` - Add/plus icon
- `faPenSquare` - Edit/pen icon
- These are used in the table UI for user actions

**Component Methods:**

1. **addNewTeacher()**
   - Routes to the add new teacher component
   - Triggered when user clicks "Add New" button

2. **editTeacher(id)**
   - Routes to edit teacher component
   - Passes the teacher id through navigation state
   - Triggered when user clicks edit icon

3. **initializeDB()**
   - Initializes the database on component load
   - Calls getTeacherData on success or failure

4. **getTeacherData()**
   - Retrieves all teachers from the backend
   - Transforms response into array format for display
   - Updates `teacherData` array

5. **search(value)**
   - Filters teachers by name based on search input
   - If search is empty, reloads all teachers
   - Updates `teacherData` with filtered results

6. **deleteTeacher(itemid)**
   - Deletes a teacher from the database
   - Requests confirmation before deletion
   - Refreshes the table after deletion

#### Component Template

```html
<app-navbar title="Teachers"></app-navbar>

<div class="add-btn-container">
  <div class="add-btn-elements-container">
    <input id="teacher-search" style="height: 20px;" #box (keyup)="search(box.value)" 
           placeholder="Search">
    <button style="width: 120px; height: 43px; font-size: 14px;" (click)="addNewTeacher()" 
            class="btn">Add New &nbsp;<fa-icon [icon]="faPlus"></fa-icon></button>
  </div>
</div>

<div class="table-container">
  <table id="teacher-table">
    <tr>
      <th>Name</th>
      <th>Staff ID</th>
      <th>DOB</th>
      <th style="width: 50px;"></th>
      <th style="width: 50px;"></th>
    </tr>
    <tr *ngFor="let teacher of teacherData">
      <td>{{teacher[0].name}}</td>
      <td>{{teacher[0].id}}</td>
      <td>{{2022 - teacher[0].age}}</td>
      <td id="teacher-edit-{{teacher[0].id}}" (click)="editTeacher(teacher[0].id)" 
          style="text-align: center;">
        <fa-icon class="edit-icon" [icon]="faPenSquare"></fa-icon>
      </td>
      <td id="teacher-delete-{{teacher[0].id}}" (click)="deleteTeacher(teacher[0].id)" 
          style="text-align: center; color: #FC4F4F;">
        <fa-icon class="trash-icon" [icon]="faTrash"></fa-icon>
      </td>
    </tr>
  </table>
</div>
```

#### Understanding the Template

**Search Input:**
```html
<input id="teacher-search" #box (keyup)="search(box.value)" placeholder="Search">
```

**Explanation:**
- `#box` - Template reference variable for the input element
- `(keyup)="search(box.value)"` - Calls search method on every key press
- Passes the input value to the search function
- Dynamically filters the teacher table

**Add New Button:**
```html
<button (click)="addNewTeacher()" class="btn">
  Add New &nbsp;<fa-icon [icon]="faPlus"></fa-icon>
</button>
```

**Explanation:**
- `(click)="addNewTeacher()"` - Calls addNewTeacher method on click
- Routes to the add new teacher form

**Table Iteration:**
```html
<tr *ngFor="let teacher of teacherData">
```

**Explanation:**
- `*ngFor="let teacher of teacherData"` - Angular directive to loop over array
- Creates a table row for each teacher in the `teacherData` array
- The `teacher` variable can be accessed within the loop

**Dynamic Table Data:**
```html
<td>{{teacher[0].name}}</td>
<td>{{teacher[0].id}}</td>
<td>{{2022 - teacher[0].age}}</td>
```

**Explanation:**
- `{{ }}` - String interpolation to display data
- `teacher[0].name` - Access name property of teacher object
- `2022 - teacher[0].age` - Calculate birth year from age

**Edit Icon:**
```html
<td (click)="editTeacher(teacher[0].id)">
  <fa-icon class="edit-icon" [icon]="faPenSquare"></fa-icon>
</td>
```

**Explanation:**
- `(click)="editTeacher(teacher[0].id)"` - Calls editTeacher with teacher id
- `[icon]="faPenSquare"` - Binds FontAwesome icon to the element
- Routes to edit teacher component with teacher id

**Delete Icon:**
```html
<td (click)="deleteTeacher(teacher[0].id)">
  <fa-icon class="trash-icon" [icon]="faTrash"></fa-icon>
</td>
```

**Explanation:**
- `(click)="deleteTeacher(teacher[0].id)"` - Calls deleteTeacher with teacher id
- `[icon]="faTrash"` - Binds trash icon for delete action
- Deletes teacher after confirmation

---

## Part 5: Starting the Frontend

### Prerequisites

Ensure the backend server is running on port 8080:

```powershell
npm start
```

### Start Frontend Development Server

Navigate to the frontend directory and start the development server:

```powershell
cd frontend
ng serve
```

**or**

```powershell
cd frontend
npm start
```

### Access the Application

Open your browser and navigate to:

```
http://localhost:4200
```

The frontend application will be loaded with the Teacher Management interface.

---

## Summary

| Component | Location | Purpose | Status |
|-----------|----------|---------|--------|
| AppServiceService | `src/app/app-service.service.ts` | Services for backend communication | ✅ Implemented |
| AppRoutingModule | `src/app/app-routing.module.ts` | Routing configuration | ✅ Implemented |
| NavbarComponent | `src/app/components/navbar/` | Navigation bar | ✅ Implemented |
| AddNewTeacherComponent | `src/app/components/add-new-teacher/` | Add teacher form | ✅ Implemented |
| EditTeacherComponent | `src/app/components/edit-teacher/` | Edit teacher form | ✅ Implemented |
| TeacherTableComponent | `src/app/components/teacher-table/` | Teachers list/table | ✅ Implemented |
| Student Components | `src/app/components/` | Student management | ✅ Implemented |
| App Component | `src/app/app.component.html` | Router outlet | ✅ Configured |

---

## Quick Reference: Routes and Components

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | TeacherTableComponent | View all teachers |
| `/addTeacher` | AddNewTeacherComponent | Add new teacher |
| `/editTeacher` | EditTeacherComponent | Edit teacher details |
| `/student` | StudentTableComponent | View all students |
| `/addStudent` | AddNewStudentComponent | Add new student |
| `/editStudent` | EditStudentComponent | Edit student details |
| `/dbinitialize` | DbInitializeComponent | Initialize database |

---

## Quick Reference: Service Methods

**Teacher Methods:**
- `getTeacherData()` - Get all teachers
- `getOneTeacherData(payload)` - Get single teacher
- `addTeacher(payload)` - Create teacher
- `editTeacher(payload)` - Update teacher
- `deleteTeacher(payload)` - Delete teacher

**Student Methods:**
- `getStudentData()` - Get all students
- `getOneStudentData(payload)` - Get single student
- `addStudent(payload)` - Create student
- `editStudent(payload)` - Update student
- `deleteStudent(payload)` - Delete student

---

## Troubleshooting

### Cannot Connect to Backend
**Error:** `Cannot connect to the remote server` or `Failed to load resource`

**Solution:**
1. Ensure the backend server is running on port 8080
2. Run `npm start` in the project root directory
3. Check that there are no firewall issues

### Module Not Found
**Error:** `Cannot find module '@angular/core'`

**Solution:**
1. Install frontend dependencies
2. Run `cd frontend && npm install`

### Port Already in Use
**Error:** `Port 4200 is already in use`

**Solution:**
```powershell
cd frontend
ng serve --port 4201
```

---

**Frontend Setup Date:** November 17, 2025  
**Status:** ✅ Frontend Ready for Development
