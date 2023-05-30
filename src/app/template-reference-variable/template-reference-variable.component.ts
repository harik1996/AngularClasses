import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent {

  data1:string = "this is demo of component communication";//Declaring a String

  demo() {
    return "Hello"
  }
}
