import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css',
})
export class StructuralDirective {
  tog: boolean = true;
  names: string[] = ['nix', 'NIkhil', 'raju rastogi', 'booba thakur'];
  toggle() {
    this.tog = !this.tog;
  }
}
