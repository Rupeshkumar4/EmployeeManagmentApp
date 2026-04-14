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
  isSidebarOpen = true;

  userName = '';
  role = '';

  constructor(private router: Router) {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.userName = user.empName || '';
    this.role = user.role || '';
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}