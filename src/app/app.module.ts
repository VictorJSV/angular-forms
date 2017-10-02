import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { TplDrivenFormsComponent } from './tpl-driven-forms/tpl-driven-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TplDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
