import { Component } from '@angular/core';
import { Employeeservice } from '../employeeservice/employeeservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeehooks',
  imports: [Employeeservice, CommonModule],
  templateUrl: './employeehooks.html',
  styleUrl: './employeehooks.css',
})
export class Employeehooks {
  username = 'Prem';
  changeName() {
    this.username = 'Poojan';
  }
  show = true;

  showMsg() {
    console.log('child btn clicked');
  }
}
