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

  editIndex = -1;
  editEmp(i: number) {
    this.editIndex = i;
    this.id = this.employee[i].id;
    this.name = this.employee[i].name;
    this.city = this.employee[i].city;
  }

  updateEmp() {
    this.employee[this.editIndex].name = this.name;
    this.employee[this.editIndex].id = this.id;
    this.employee[this.editIndex].city = this.city;

    this.editIndex = -1;
    this.id = 0;
    this.name = '';
    this.city = '';
  }

  cancleEdit() {
    this.editIndex = -1;
    this.id = 0;
    this.name = '';
    this.city = '';
  }
}
