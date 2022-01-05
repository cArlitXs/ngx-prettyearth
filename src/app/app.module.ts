import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrettyearthModule } from 'projects/ngx-prettyearth/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPrettyearthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
