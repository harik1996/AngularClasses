import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent {

  // Creating an instance of the cutoeve
  // In the EventEmitter object we are having the emit method
  @Output() custoeve = new EventEmitter();

  message = "passed to parent"

  // We are emitting an event in the child component
  passtoParent() {
    this.custoeve.emit(this.message);
  }

  updateMessage(e:any) {
    this.message= e.target.value;
  }
}
