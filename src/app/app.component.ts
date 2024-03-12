import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValueComponent } from './value/value.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ValueComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DatingApp-SPA';
}
