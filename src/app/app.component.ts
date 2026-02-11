import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './Header/header.component';
import {ProductListComponent} from './product-list/product-list.component';
// import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, TopHeaderComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-amazon';
}
