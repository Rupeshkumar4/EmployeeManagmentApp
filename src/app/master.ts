import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllLeaveBalance, ApiResponse, EmployeeModel, userLogin } from './model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class Master {
  private http = inject(HttpClient);

  addEmployee(employeeData: EmployeeModel): Observable<ApiResponse> {
    // Set createdDate to current date if empty
    if (!employeeData.createdDate) {
      employeeData.createdDate = new Date().toISOString();
    }

    return this.http.post<ApiResponse>('/api/LeaveTracker/CreateNewEmployee', employeeData);
  }

  getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>('/api/LeaveTracker/getAllEmployee');
  }

  deleteEmployee(empId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`/api/LeaveTracker/DeleteEmployee/${empId}`);
  }
  loginEmployee(obj: userLogin): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>('/api/LeaveTracker/login', obj);
  }
  updateEmployee(employeeData: EmployeeModel): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(
      `/api/LeaveTracker/UpdateEmployee?id=${employeeData.empId}`,
      employeeData,
    );
  }

  getAllLeaveBalance(): Observable<AllLeaveBalance[]> {
    return this.http.get<AllLeaveBalance[]>('/api/LeaveTracker/GetAllBalances');
  }

  updateLeaveBalance(balanceData: AllLeaveBalance): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`/api/LeaveTracker/AddLeaveBalance`, balanceData);
  }
}
