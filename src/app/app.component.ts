import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './Header/header.component';
import { ContainerComponent } from './container/container.component';
// import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, TopHeaderComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-amazon';
}
