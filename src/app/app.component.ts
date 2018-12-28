import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  public onTabSelect(e) {
    console.log(e);
  }

  onButtonClick() {
      this.title = 'Hello from Kendo UI!';
  }
}
