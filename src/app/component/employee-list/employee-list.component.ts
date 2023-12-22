import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  emparr: Employee[] = [];
  constructor(private empService: EmployeeServiceService) { }
  ngOnInit() {
    this.empService.findAll().subscribe(data => {
      this.emparr = data;
    });
  }
}