import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(emp: any[], st: string): any[] {
    if (!st) {
      return emp;
    }
    return emp.filter((e) => {
      let searchTest =
        e.name.toLowerCase().includes(st.toLocaleLowerCase()) ||
        e.city.toLowerCase().includes(st.toLocaleLowerCase());
      console.log(searchTest);
      return searchTest;
    });
  }
}
