import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html'
})
export class ProductFilterComponent {
  searchTerm = '';
  @Output() searchChanged = new EventEmitter<string>();
  @Output() categoryChanged = new EventEmitter<string>();

  onSearch() {
    this.searchChanged.emit(this.searchTerm);
  }

  filterByCategory(category: string) {
    this.categoryChanged.emit(category);
  }
}
