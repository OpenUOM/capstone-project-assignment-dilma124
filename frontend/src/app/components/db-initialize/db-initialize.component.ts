import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-db-initialize',
  templateUrl: './db-initialize.component.html',
  styleUrls: ['./db-initialize.component.css']
})
export class DbInitializeComponent implements OnInit {

  constructor(private service: AppServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.initializeDB().subscribe(
      (response: any) => {
        console.log('Database initialized:', response);
        // Redirect to home page after initialization
        this.router.navigate(['']);
      },
      (error: any) => {
        console.error('Error initializing database:', error);
        // Still redirect even if there's an error
        this.router.navigate(['']);
      }
    );
  }

}
