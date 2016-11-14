import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Ng2Plotly} from "./dps-bar-chart/ng2-plotly.component";

@NgModule({
  declarations: [
    Ng2Plotly
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Ng2Plotly
  ],
  providers: []
})
export class Ng2PlotlyModule {}
