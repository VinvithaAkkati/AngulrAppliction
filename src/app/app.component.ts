import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './Header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, TopHeaderComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-amazon';
}
