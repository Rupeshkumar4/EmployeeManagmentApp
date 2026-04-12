import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { EmployeeModel } from '../model/employee.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  employeeObject: EmployeeModel = new EmployeeModel();
  isSidebarOpen = true;
  public userName = '';
  public role = '';

  constructor(private router: Router) {
    const localStorageUser = localStorage.getItem('loggedInUser');
    if(localStorageUser){
      const user = JSON.parse(localStorageUser);
      this.userName = user.empName || '';
      this.role = user.role || '';
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    // Add logout logic here, e.g., clear session
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
