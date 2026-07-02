import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Empser {
  employee = [
    {
      name: 'Prem',
      id: 1,
      city: 'Kadi',
    },
    {
      name: 'Poojan',
      id: 2,
      city: 'Kadi',
    },
  ];

  id = 0;
  name = '';
  city = '';

  addEmp() {
    this.employee.push({ id: this.id, name: this.name, city: this.city });
  }
  removeEmp(id: number) {
    console.log(this.id);
    this.employee = this.employee.filter((emp) => emp.id !== id);
    console.log(this.employee);
  }
}
