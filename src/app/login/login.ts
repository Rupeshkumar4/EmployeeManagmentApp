import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeModel } from '../model/employee.model';
import { Master } from '../master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  employeeObject: EmployeeModel = new EmployeeModel();
  masterService = inject(Master);

  constructor(private router: Router) {}
  login(){
    this.masterService.loginEmployee({userName: this.employeeObject.userName || '', password: this.employeeObject.password || ''}).subscribe({
      next: (result) => {
        if (result && result.empId) {
          alert('Login successful');
          localStorage.setItem('loggedInUser', JSON.stringify(result));
          const role = result.role?.toLowerCase();
          if (role === 'Hr') {
            this.router.navigate(['/employee']);
          } else{
            this.router.navigate(['/leave-balance']);
          } 
        } else {
          alert('Login failed');
        }
      },
      error: (error) => {
        console.error('Login error', error);
        alert('An error occurred during login');
      }
    });
  }
  
}
