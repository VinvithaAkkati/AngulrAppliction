import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
     @Input() all: number = 0;
     @Input() inStock: number = 0;
     get outOfStock(): number {
      return this.all - this.inStock;
    }

    selectedRadioButton: string = 'all';
}
