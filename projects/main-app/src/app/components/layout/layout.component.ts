import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  LoginName = localStorage.getItem('Name');

  isLoading = false;

  constructor(private router: Router) {
   if (this.isLoggedIn() == false) {
     this.router.navigateByUrl('/');
   } 
 }
 
  ngOnInit(): void {
    fromEvent(window, 'Loading').subscribe((event: any) => {
      this.isLoading = event.detail;
    })
  }

  onObjectType() {
    this.isLoading = true;
    this.router.navigateByUrl('/ob-type');
  }

  onObjectData() {
    this.isLoading = true;
    this.router.navigateByUrl('/ob-data');
  }

  
 
  onLogout() {
   localStorage.clear();
   this.router.navigateByUrl('/');
 }
 
 public isLoggedIn(): boolean {      
   let status = false;      
   if (localStorage.getItem('Id') !== null) {      
      status = true;      
   } else {      
      status = false;      
   }      
   return status;      
 }   
 
 }
