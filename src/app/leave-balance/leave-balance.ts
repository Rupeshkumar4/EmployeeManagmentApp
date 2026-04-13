import { Component,inject, OnInit } from '@angular/core';
import { AllLeaveBalance } from '../model/employee.model';
import { Master } from '../master';
import { CommonModule, DatePipe } from '@angular/common';
import { EditLeaveBalance } from "../edit-leave-balance/edit-leave-balance";

@Component({
  selector: 'app-leave-balance',
  imports: [DatePipe, EditLeaveBalance,CommonModule],
  templateUrl: './leave-balance.html',
  styleUrl: './leave-balance.css',
})
export class LeaveBalance implements OnInit {
  masterService = inject(Master);
  AllLeaveBalanceObj: AllLeaveBalance[]= new Array<AllLeaveBalance>();
  ngOnInit() {
    this.getAllLeaveBalance();
  }
  getAllLeaveBalance(){
    this.masterService.getAllLeaveBalance().subscribe({
      next: (result: AllLeaveBalance[]) => {
        this.AllLeaveBalanceObj = result;
        console.log('leave balance', this.AllLeaveBalanceObj);
      },
      error: (error: any) => {
          alert(error.error?.message || 'Error fetching leave balance from API');
      }   
    })
  }
  selectedEmployee!: AllLeaveBalance;
isEditOpen = false;

onEdit(emp: AllLeaveBalance) {
  this.selectedEmployee = { ...emp }; // clone
  this.isEditOpen = true;
}


}
