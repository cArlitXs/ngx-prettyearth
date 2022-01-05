import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrettyearthModule } from 'ngx-prettyearth';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPrettyearthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
