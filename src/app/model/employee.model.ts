export class EmployeeModel {
  empId: number | undefined;
  empName: string | undefined;
  contactNo: string | undefined;
  email: string | undefined;
  deptName: string | undefined;
  designation: string | undefined;
  createdDate: string | undefined;
  userName: string | undefined;
  password: string | undefined;
  sickLeaveBalance: number | undefined;
  paidLeaveBalance: number | undefined;
  role: string | undefined;

  constructor() {
    
      this.empId = 0
      this.empName = '';
      this.contactNo = '';
      this.email = '';
      this.deptName = '';
      this.designation = '';
      this.createdDate = '';
      this.userName = '';
      this.password = '';
      this.sickLeaveBalance = 0;
      this.paidLeaveBalance = 0;
      this.role = '';
    
  }
}

export interface ApiResponse {
  result: boolean;
  message?: string;
  error?: any;
}

export interface userLogin{
  userName: string;
  password: string;
}

export class AllLeaveBalance {
  balanceId: number;
  empId: number;
  leaveType: string;
  count: number;
  updatedDate: string;
  updateBy: number;
  empName: string;

  constructor() {
    this.balanceId = 0;
    this.empId = 0;
    this.leaveType = '';
    this.count = 0;
    this.updatedDate = '';
    this.updateBy = 0;
    this.empName = '';
  }
}
 