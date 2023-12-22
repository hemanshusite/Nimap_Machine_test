import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { Employee } from '../../model/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent 
{
  empobj:Employee;
  constructor(private empservice:EmployeeServiceService){
     this.empobj= new Employee();
  }

  onSubmit()
  {
    console.log(this.empobj);
    this.empservice.save(this.empobj).subscribe(result=>{console.log(result)});
  }

}