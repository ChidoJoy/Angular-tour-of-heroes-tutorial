import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagesComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tour-of-heroes-new';
}
