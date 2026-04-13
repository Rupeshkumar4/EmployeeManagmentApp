import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllLeaveBalance, ApiResponse } from '../model/employee.model';
import { Master } from '../master';

@Component({
  selector: 'app-edit-leave-balance',
  imports: [FormsModule],
  templateUrl: './edit-leave-balance.html',
  styleUrl: './edit-leave-balance.css',
})
export class EditLeaveBalance {
  @Input() employee!: AllLeaveBalance;
  @Output() close = new EventEmitter<void>();
  @Output() updated = new EventEmitter<void>();

  masterService = inject(Master);

onUpdate() {

  this.employee.updatedDate = new Date().toISOString();

  const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  this.employee.updateBy = user.empId;
  console.log("PAYLOAD 👉", this.employee);

  this.masterService.updateLeaveBalance(this.employee).subscribe({
    next: (res: ApiResponse) => {
      if (res.result) {
        alert('Updated successfully');
        this.updated.emit();
        this.close.emit();
      } else {
        alert(res.message);
      }
    },
    error: (err) => {
      alert(err.error?.message || 'Server error');
    }
  });
}

  onCancel() {
    this.close.emit();
  }
}
