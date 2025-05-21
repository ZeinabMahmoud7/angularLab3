import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Laptop HP', category: 'laptop', price: 15000, image: 'assets/laptop.jpg' },
    { id: 2, name: 'Mouse Logitech', category: 'mouse', price: 500, image: 'assets/mouse.jpg' },
    { id: 3, name: 'Keyboard RGB', category: 'keyboard', price: 800, image: 'assets/keyboard.jpg' },
    { id: 4, name: 'Laptop Dell', category: 'laptop', price: 17000, image: 'assets/laptop2.jpg' },
    { id: 5, name: 'Mouse Razer', category: 'mouse', price: 900, image: 'assets/mouse2.jpg' }
  ];

  searchTerm: string = '';
  selectedCategory: string = '';

  constructor() {}

  ngOnInit(): void {}

  get categories(): string[] {
  
    return Array.from(new Set(this.products.map(p => p.category)));
  }

  filteredProducts(): Product[] {
    return this.products.filter(p =>
      (!this.searchTerm || p.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (!this.selectedCategory || p.category === this.selectedCategory)
    );
  }

  viewDetails(product: Product): void {
    alert(`Product: ${product.name}\nPrice: ${product.price} EGP`);
  }
}
