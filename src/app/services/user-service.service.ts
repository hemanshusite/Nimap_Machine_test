import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { BehaviorSubject,Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  formData: any;

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }  
}
