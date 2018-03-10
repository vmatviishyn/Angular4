import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table-fix';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;
  tableResourse: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
    .subscribe(products => {
      this.products = products;
      this.initializeTable(products);
    });
  }

  private initializeTable(products: Product[]){
    this.tableResourse = new DataTableResource(products);
    this.tableResourse.query({offset:0})
      .then(items => this.items = items);
    this.tableResourse.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params){
    if (!this.tableResourse) return;

    this.tableResourse.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredProducts = (query) ?
      this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : 
      this.products;

    this.initializeTable(filteredProducts);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
