import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string= 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
  }

  onBack() {
    this._router.navigate(['/products']);
  }

}
