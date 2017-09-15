import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'fc-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit  {
    ngOnInit(): void {
        console.log('on init');
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
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Mazda 3",
            "productCode": "Mazda",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/macan-s-diesel-012.jpg?itok=IMJPGygv"
        },
        {
            "productId": 2,
            "productName": "RX350",
            "productCode": "Lexus",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Macan S",
            "productCode": "Porche",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ]

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }
}