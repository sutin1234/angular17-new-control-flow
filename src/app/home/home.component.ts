import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { Product } from '../models/Proudct';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <p>
      Product List: {{itemslength()}} items
    </p>
    <app-product-list [items]="items()"></app-product-list>
  `,
})

export class HomeComponent implements OnInit {
  products: Product[] = [
    { id: 'B100001', name: 'Angular Signal', price: 500 },
    { id: 'B100002', name: 'Angular Standalone', price: 300 },
    { id: 'B100003', name: 'Angular New Control Flow', price: 600 },
    { id: 'B100004', name: 'Angular ClientHydration', price: 800 },
    { id: 'B10000ถ', name: 'Angular 17 Full Course', price: 1500 },
  ]
  items = signal<Product[]>([])
  itemslength = computed(() => this.items().length)

  ngOnInit(): void {
    this.items.set(this.products)
    console.log(this.itemslength())
  }



}
