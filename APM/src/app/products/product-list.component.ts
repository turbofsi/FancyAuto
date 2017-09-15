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
            "productName": "Macan S",
            "productCode": "Proche",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 4.2,
            "imageUrl": "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/macan-s-diesel-012.jpg?itok=IMJPGygv"
        },
        {
            "productId": 2,
            "productName": "RX350",
            "productCode": "Lexus",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 5.0,
            "imageUrl": "https://blogs-images.forbes.com/kbrauer/files/2015/09/2016-Lexus-RX-350-F-Sport-Front-Driving.jpg"
        },
        {
            "productId": 5,
            "productName": "Mazda 3",
            "productCode": "Mazda",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 2.8,
            "imageUrl": "http://buyersguide.caranddriver.com/media/assets/submodel/7721.jpg"
        }
    ]

    constructor() {
        this.filterdProducts = this.products;
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