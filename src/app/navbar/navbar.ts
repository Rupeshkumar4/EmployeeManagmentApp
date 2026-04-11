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

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    // Add logout logic here, e.g., clear session
    this.router.navigate(['/login']);
  }
}
