import { Component } from '@angular/core'
import { ProductService } from './products/services/product.service';

@Component({
  selector: 'fc-root',
  template:`
    <div>
      <h1>{{pageTitle}}</h1>
      <fc-products></fc-products>
     </div>
  `,
  providers: [ ProductService ]
})

export class AppComponent {
  pageTitle: string = 'Fancy Cars'
}