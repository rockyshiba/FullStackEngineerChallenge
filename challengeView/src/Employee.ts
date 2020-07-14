import { Department } from './Department';

export interface Employee{
    id: number;
    first_name: string;
    last_name: string;
    dob: Date;
    department: Department;
    role_title: string;
}
