import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/modals/cart-item';

@Component({
  selector: 'app-shopping-widgets',
  templateUrl: './shopping-widgets.component.html',
  styleUrls: ['./shopping-widgets.component.sass']
})
export class ShoppingWidgetsComponent implements OnInit {

  products: Product[];
  indexProduct: number;

  public sidenavMenuItems:Array<any>;

  @Input() shoppingCartItems: CartItem[] = [];

  constructor() { }

  ngOnInit() {
  }
  public updateCurrency(curr) {
  }


  public removeItem(item: CartItem) {
  }

  public getTotal() {
  }

}
