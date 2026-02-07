import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@Component({
  selector: 'root-header',
  standalone: true,
  imports : [ TopMenuComponent , MainMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent {
  headerTitle = 'Vinvitha App';
}
