import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/Proudct';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
     <div>
        @for (item of items; track item){
          <app-product-item [item]="item"></app-product-item>
        } @empty {
          <p>no items !!</p>
        }
      </div>

  `,
})
export class ProductListComponent {
  @Input({ required: true }) items: Product[] = []
}
