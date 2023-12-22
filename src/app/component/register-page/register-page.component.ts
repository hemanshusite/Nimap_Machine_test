import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardComponentComponent } from '../dashboard-component/dashboard-component.component';
import { UserServiceService } from '../../services/user-service.service';
import { FormDataService } from '../../services/form-data.service';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,MatIconModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent{
  formData: any = {};
  constructor(public dialogRef: MatDialogRef<RegisterPageComponent>,private fb: FormBuilder,private router: Router,private _dialog: MatDialog,private dataSharingService: UserServiceService,private formDataService: FormDataService) {}
  
  closeDialog(): void {
    this.dialogRef.close();
  }
  registrationForm=new FormGroup({
    firstName: new FormControl ('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.maxLength(20)]),
    photo: new FormControl (''),
    age: new FormControl (18, Validators.required),
    interest: new FormControl (''),
    addressType: new FormControl ('home'),
    address1: new FormControl (''),
    companyAddress1: new FormControl (''),
    state: new FormControl(''),
    country:new FormControl(''),
    image: new FormControl("",Validators.required)
  })
  
  onImageSelected(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    
    if (file) {
      this.readImage(file);
    }
  }
  selectedImage: string | ArrayBuffer | null = null;
  
  readImage(file: File): void {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      this.selectedImage =null;
    };

    reader.readAsDataURL(file);
  }
  onFormChange(formData: any): void {
    this.formDataService.setFormData(formData);
  }
  submitForm(): void {
    if (this.registrationForm.valid) {
      // Assuming you have a 'user' object to store the form data
      // const user = {
      //   ...this.registrationForm.value,
      //   image: this.registrationForm.get('image')?.value || '../assets/images/1.jpg' // Default image if none selected
      // };
      this.formData = {
        // Other form fields...
        name: this.formData.name,
        email: this.formData.email,
        image: this.selectedImage,
      };

      /// Set form data in the service
      // this.dataSharingService.setFormData(this.registrationForm.value);
      // this.dataSharingService.setFormData(this.registrationForm.value);
      

      // Open the dashboard dialog
      // this.openDashboard();
    }
    this.dialogRef.close();
    // You may navigate to the profile screen or handle the data as needed
  }

  openDashboard() {
    this._dialog.open(DashboardComponentComponent, {
      width: '800px', // Adjust the width as needed
    });
  }


}
