import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  public productClicked: Event;

  productSelected(eventData: Event) {
    this.productClicked = eventData;
  }
}
