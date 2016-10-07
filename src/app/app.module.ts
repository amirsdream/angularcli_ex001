import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent,AppComponent2 } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    TestComponentComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,AppComponent2,TestComponentComponent,ContactFormComponent]
})
export class AppModule { }
