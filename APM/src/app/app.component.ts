import { Component } from '@angular/core'

@Component({
  selector: 'fc-root',
  template:`
    <div>
      <h1>{{pageTitle}}</h1>
      <fc-products></fc-products>
     </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Fancy Cars'
}