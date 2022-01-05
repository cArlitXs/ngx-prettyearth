import { NgModule } from '@angular/core';
import { NgxPrettyearthComponent } from './ngx-prettyearth.component';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    NgxPrettyearthComponent,
    SafePipe
  ],
  imports: [
  ],
  exports: [
    NgxPrettyearthComponent
  ]
})
export class NgxPrettyearthModule { }
