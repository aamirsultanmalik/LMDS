import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product.model';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
 @Input() product: Product;

  constructor( private dialog: MatDialog, private router: Router ) { }

  ngOnInit() {
  }

     // Add to cart
     public addToCart(product: Product,  quantity: number = 1) {
    }

    // Add to wishlist
    public addToWishlist(product: Product) {
   }

    // Add to compare
    public addToCompare(product: Product) {
   }


  public openProductDialog(product){
    let dialogRef = this.dialog.open(ProductDialogComponent, {
        data: product,
        panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe(product => {
      if(product){
        this.router.navigate(['/products', product.id, product.name]);
      }
    });
  }

}
