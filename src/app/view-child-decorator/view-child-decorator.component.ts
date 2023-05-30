import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-decorator',
  templateUrl: './view-child-decorator.component.html',
  styleUrls: ['./view-child-decorator.component.css']
})
export class ViewChildDecoratorComponent {

  data:string = "demo of the view child";

  //Passing the data from the Child Component to the Parent Component

  passtoParent() {
     return this.data;
  }
}
