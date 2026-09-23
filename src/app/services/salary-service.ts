import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  calcSalary(a: number, b: number) {
    return a + b;
  }
}
