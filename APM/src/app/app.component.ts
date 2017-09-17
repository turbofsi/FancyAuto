import { Component } from '@angular/core'
import { ProductService } from './products/services/product.service';

@Component({
  selector: 'fc-root',
  templateUrl: './app.component.html',
  providers: [ ProductService ]
})

export class AppComponent {
  pageTitle: string = 'Fancy Cars'
}