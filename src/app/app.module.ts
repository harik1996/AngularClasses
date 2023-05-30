import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './InputDecorator/header.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { ViewChildDecoratorComponent } from './view-child-decorator/view-child-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OutputDecoratorComponent,
    TemplateReferenceVariableComponent,
    ViewChildDecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
