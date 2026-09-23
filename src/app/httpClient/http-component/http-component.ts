import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-component',
  imports: [CommonModule],
  templateUrl: './http-component.html',
  styleUrl: './http-component.css',
})
export class HttpComponent implements OnInit {
  dataArr: any[] = [];
  // dataArr$: any;
  constructor(private httpService: HttpService) {
    console.log('constructor');
  }
  ngOnInit(): void {
    this.httpService.getData().subscribe({
      next: (data) => {
        this.dataArr = data.items;
        console.log(this.dataArr);
      },
    });

    //async pipe
    // this.dataArr$ = this.httpService.getData();
  }
}
