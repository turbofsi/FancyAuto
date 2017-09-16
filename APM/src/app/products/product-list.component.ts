import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './services/product.service';

@Component({
    selector: 'fc-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit  {
    ngOnInit(): void {
        console.log('on init');
        this.products = this._productService.getProducts();
        this.filterdProducts = this.products;
    }
    pageTitle: string = 'Car list';
    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterdProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filterdProducts: IProduct[];

    imageWidth: number = 50;
    imageMargin: number = 5;
    showImage: boolean = false;
    products: IProduct[];

    private _productService: ProductService;
    constructor(productService: ProductService) {
        this._productService = productService;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    onRatingClicked(message: string) {
        this.pageTitle = "Car List " + message;
    }
}