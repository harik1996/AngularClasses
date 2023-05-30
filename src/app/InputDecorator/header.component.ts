import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  test:string="demo"
  // In the below two lines of code two properties are getting value from the Parent Component(app.component.ts)
  @Input() childtitle:string = "";
  @Input() d1:string ="";
  @Input() d2: any
}
