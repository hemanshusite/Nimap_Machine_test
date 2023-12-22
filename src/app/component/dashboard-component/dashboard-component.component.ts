import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserServiceService } from '../../services/user-service.service';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-component.component.html',
  styleUrl: './dashboard-component.component.css'
})
export class DashboardComponentComponent implements OnInit {
  formData: any;

  constructor(private route: ActivatedRoute,private dataSharingService: UserServiceService,private formDataService: FormDataService) { }

  ngOnInit() {
    this.formDataService.formData$.subscribe((data) => {
      this.formData = data;
    })
  }
}
