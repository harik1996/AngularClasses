import { Component, ViewChild } from '@angular/core';
import { ViewChildDecoratorComponent } from './view-child-decorator/view-child-decorator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentsCommunication';
  //Input Decorator Properties i.e this properties are passed to the ChildComponent(InputDecorator)
  ctitle:string ="header component";
  data1:string ="this is demo of input decarator";
  parr = [10,40,60,70,80];
  data2:string ="data to the header component";
  parr2 = [100,30,90,50,10];

  cdata:string = "";
  cdata1:string=""; // This property variable belongs to the ViewChildDecorator

  updatecdata(d:any) {
   this.cdata=d;
  }

  // ViewChild Decorator
  @ViewChild(ViewChildDecoratorComponent) viewchild:any

 test() {
   this.cdata1 = this.viewchild.passtoParent();
   
 }

 // Using the view child and changing the DOM
 @ViewChild("test1") d:any

 changediv() {
  console.log(this.d);
  this.d.nativeElement.style.background = "blue";
  this.d.nativeElement.innerText="hello"
  
 }


  @ViewChild('para') p:any

  test1() {
    console.log(this.p.nativeElement.innerText);
  }



}
