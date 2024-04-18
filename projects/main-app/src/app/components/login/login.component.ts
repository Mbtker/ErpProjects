import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private MyService: SharedService, private router: Router) {
    this.loginObj = new Login();
    if (this.isLoggedIn() == true) {
      this.router.navigateByUrl('/dashboard');
    } 
  }

  onLogin() {
    this.MyService.login(this.loginObj).subscribe((res:any) => {
      let Id = res['Id'];
      if (Id == null) {
        alert('Username or password is incorect!');
      } else {
        if (typeof sessionStorage !== 'undefined') {
          localStorage.setItem('Id', Id);
          localStorage.setItem('Name', res['Name']);
  
          this.router.navigateByUrl('/dashboard');
        } else {
          alert('Web Storage is not supported in this environment.');
        }

      }
    });
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


export class Login {
  Username: string;
  Password: string;
  constructor() {
    this.Username = '';
    this.Password = '';
  }
}