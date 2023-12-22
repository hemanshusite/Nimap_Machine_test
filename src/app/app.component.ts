import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentsSignupComponent } from './component/students-signup/students-signup.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from './services/user-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,StudentsSignupComponent,EmployeeListComponent,HttpClientModule,EmployeeFormComponent,HomePageComponent,MatButtonModule,MatIconModule,MatFormFieldModule,FormsModule],
  providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'formsValidation';
  constructor(private _dialog: MatDialog){}

  openRegisterForm(){
    this._dialog.open(RegisterPageComponent,{
      width:'550px',
      height:'82vh'
    });
  }
}
