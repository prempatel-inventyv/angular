import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employeeservice } from './components/employeeservice/employeeservice';
import { Employeehooks } from './components/employeehooks/employeehooks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Employeeservice, Employeehooks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('create_service');
}

// ng access
