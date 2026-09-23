import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../observable-service';
import { NgForOf } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-observable-component',
  imports: [],
  templateUrl: './observable-component.html',
  styleUrl: './observable-component.css',
})
export class ObservableComponent implements OnInit {
  arr: number[] = [];
  constructor(private observableService: ObservableService) {}
  ngOnInit(): void {
    this.observableService.getNumber().subscribe({
      next: (data: number) => {
        this.arr.push(data);
      },
    });
  }
}
