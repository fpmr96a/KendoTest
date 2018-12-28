import { Component } from '@angular/core';
import { items } from '../assets/data/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  public items: any[] = items;
  
  private toggleText: string = "Hide";
  private show: boolean = true;

  public onTabSelect(e) {
    console.log(e);
  }

  public onButtonClick() {
    this.show = !this.show;
    this.toggleText = this.show ? "Hidе" : "Show";
  }

  

  
}
