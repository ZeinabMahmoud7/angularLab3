import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Wireless Mouse', category: 'Mouse', description: 'Smooth tracking', image: 'assets/mouse.jpg' },
    { id: 2, name: 'Gaming Laptop', category: 'Laptop', description: 'High performance', image: 'assets/laptop.jpg' },
    { id: 3, name: 'Mechanical Keyboard', category: 'Keyboard', description: 'RGB Lighting', image: 'assets/keyboard.jpg' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
