import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';
import { Interpolation } from './components/interpolation/interpolation';
import { PropertyBinding } from './components/property-binding/property-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';
import { StructuralDirective } from './components/structural-directive/structural-directive';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';
import { Decorators } from './components/decorators/decorators';
import { ObservableComponent } from './asynchronous-observables/observable-component/observable-component';
import { HttpComponent } from './httpClient/http-component/http-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NewComponent,
    Interpolation,
    PropertyBinding,
    EventBinding,
    TwoWayBinding,
    StructuralDirective,
    AttributeDirective,
    Decorators,
    RouterLink,
    RouterLinkActive,
    ObservableComponent,
    HttpComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-project');
  // text: string = 'nix404';

  // @output decorator
  message = '';
  receive(data: string) {
    this.message = data;
  }
}
