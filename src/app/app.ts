import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';
import { Interpolation } from './components/interpolation/interpolation';
import { PropertyBinding } from './components/property-binding/property-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';
import { StructuralDirective } from './components/structural-directive/structural-directive';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NewComponent,
    Interpolation,
    PropertyBinding,
    EventBinding,
    TwoWayBinding,
    StructuralDirective
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-project');
}
