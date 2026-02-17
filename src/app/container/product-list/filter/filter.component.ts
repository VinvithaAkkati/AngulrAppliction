import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
     @Input() all: number = 0;
     @Input() inStock: number = 0;
     get outOfStock(): number {
      return this.all - this.inStock;
    }
    
    selectedFilterRadioButton: string = 'all';
    
    @Output()
    selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

    
    onSelectedFilterRadioButtonChanged()
    {
      this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
    }
    



}
