import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Navbar } from './navbar/navbar';
import { Employee } from './employee/employee';
import { LeaveBalance } from './leave-balance/leave-balance';
import { Admin } from './admin/admin';
import { LeaveRequest } from './leave-request/leave-request';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'',
        component:Navbar,
        children:[
            {
                path:'employee',
                component:Employee
            },
            {
                path:'balance',
                component:LeaveBalance
            },
            {
                path:'admin',
                component:Admin
            },
            {
                path:'leaverequest',
                component:LeaveRequest
            }
        ]
    },
    {
        path:'**',
        redirectTo:'/login',
        pathMatch:'full'
    }
];
