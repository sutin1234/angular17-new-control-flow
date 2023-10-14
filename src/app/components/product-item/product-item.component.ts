import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/Proudct';
import { DxNumberPipe } from '../../pipes/dx-number.pipe';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, DxNumberPipe],
  template: `
    @if (item){
      <div>{{ item.name }} | {{ item.price | dxNumber }} บาท</div>
    }@else {
      <div>no item!!</div>
    }
  `,
})
export class ProductItemComponent {
  @Input() item: Product | null = null
}
