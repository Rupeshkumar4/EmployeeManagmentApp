import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../master';
import { AllLeaveBalance, leaveRequest } from '../model/employee.model';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-leave-request',
  imports: [FormsModule,DatePipe],
  templateUrl: './leave-request.html',
  styleUrl: './leave-request.css',
})
export class LeaveRequest implements OnInit {
  masterService = inject(Master);
  leaveData: leaveRequest = new leaveRequest();
  employeeLeaveBalance: AllLeaveBalance[] = new Array<AllLeaveBalance>();
  constructor(){
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      this.leaveData.empId = user.empId;
      this.leaveData.leaveDate = new Date().toISOString();
    }
  }

  ngOnInit(){
     this.getBalance(this.leaveData.empId || 0);
    }
  onRequest(){
    this.masterService.requestLeave(this.leaveData).subscribe({
      next: (response) => {
        alert(response.message || 'Leave request submitted successfully');
      },
      error: (error) => {
        alert(error.error?.message || 'An error occurred while submitting the leave request');
      }
    }); 
  }

  getBalance(empId: number){
    this.masterService.getBalanceByEmployee(empId).subscribe({
      next:(response)=>{
        console.log('Leave balance retrieved successfully');
        this.employeeLeaveBalance = response;
      },
      error:(error)=>{
        alert('An error occurred while retrieving leave balance');
      }
    });
  }
  
}
