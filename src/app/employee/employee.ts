import { Component, inject, OnInit } from '@angular/core';
import { ApiResponse, EmployeeModel } from '../model/employee.model';
import { FormsModule } from '@angular/forms';
import { Master } from '../master';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {

  employeeObject: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];
  masterService = inject(Master);

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.masterService.getEmployees().subscribe({
      next: (employees: EmployeeModel[]) => {
        this.employeeList = employees;
        alert(`Fetched ${employees.length} employees from API`);
      },
      error: (error: any) => {
        alert('Error fetching employees from API');
      }
    });
  }

  onSaveEmployee() {
    console.log('submitting employee', this.employeeObject);
    this.masterService.addEmployee(this.employeeObject).subscribe({
      next: (result: ApiResponse) => {
        alert(result.message || 'Employee added successfully');
      },
      error: (error: any) => {
        const serverError = error?.error;
        console.error('API error response', serverError || error);
        if (serverError && typeof serverError === 'object') {
          alert(JSON.stringify(serverError, null, 2));
        } else {
          alert('Error from API');
        }
      }
    });
  }

  deleteEmployee(empId: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.masterService.deleteEmployee(empId).subscribe({
        next: (result: ApiResponse) => {
          alert(result.message || 'Employee deleted successfully');
          this.getAllEmployees(); // Refresh the employee list after deletion
        },
        error: (error: any) => {
          const serverError = error?.error;
          console.error('API error response', serverError || error);
          if (serverError && typeof serverError === 'object') {
            alert(JSON.stringify(serverError, null, 2));
          } else {
            alert('Error from API');
          }
        }
      });
    }
  }
}
