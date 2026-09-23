import { Component } from '@angular/core';
import { SalaryService } from '../salary-service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  base = 30000;
  bonus = 5000;
  finalSalary = 0;
  constructor(private salaryService: SalaryService) {
    this.finalSalary = this.salaryService.calcSalary(this.base, this.bonus);
  }
}
