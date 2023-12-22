import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RegisterPageComponent } from '../register-page/register-page.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  styleUrls: ['./home-page.component.css'], // Use styleUrls instead of styleUrl
  standalone:true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, FormsModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private _dialog: MatDialog) {}

  openRegisterForm() {
    this._dialog.open(RegisterPageComponent, {
      width: '800px', // Adjust the width as needed
    });
  }
}
