import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-decorators',
  imports: [],
  templateUrl: './decorators.html',
  styleUrl: './decorators.css',
})
export class Decorators {
  // input decorator
  // @Input() message: any = '';

  // output decorator
  message = 'hellow from child';
  @Output() notify = new EventEmitter();
  sendEvent() {
    this.notify.emit(this.message);
  }
}
