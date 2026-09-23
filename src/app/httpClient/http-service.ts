import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    console.log('data send');

    return this.http.get<any[]>('https://api.waifu.im/images?PageSize=10&Page=1');
  }
}
