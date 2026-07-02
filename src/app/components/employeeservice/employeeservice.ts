import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Empser } from '../../services/empser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search-pipe';

@Component({
  selector: 'app-employeeservice',
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './employeeservice.html',
  styleUrl: './employeeservice.css',
})
export class Employeeservice {
  constructor(public empser: Empser) {
    this.getEmp();
  }
  emp: any[] = [];
  getEmp() {
    this.emp = this.empser.employee;
  }

  ngOnInit() {
    console.log('NG On Initi');
  }

  @Input() name!: String;
  ngOnChanges(changes: SimpleChanges) {
    console.log('On change function runs');
    console.log('Changes : ', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck function called');
  }

  ngOnDestory() {
    console.log('Destory func called');
  }

  @Output() notify = new EventEmitter();

  sendData() {
    this.notify.emit();
  }

  dt = Date.now();

  h = 25;

  fullName = 'Prem Patel';
  st = '';
}

// @input : perent to child
// @output : child to perent
