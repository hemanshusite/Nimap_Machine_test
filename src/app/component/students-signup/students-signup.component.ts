import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './students-signup.component.html',
  styleUrl: './students-signup.component.css'
})
export class StudentsSignupComponent {
  onSubmit(signupForm:any){
    console.log(signupForm.value);
    
  }
}
