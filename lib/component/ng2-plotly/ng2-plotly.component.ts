import {Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';
declare var Plotly:any;

@Component({
  selector: 'ng2-plotly',
  templateUrl: './ng2-plotly.component.html',
  styleUrls: ['./ng2-plotly.component.scss']
})
export class Ng2Plotly implements OnChanges, OnInit, AfterViewInit {

  @Input() data:any;
  @Input() layout:any;
  @Input() chartID:string;

  private titleID:string;
  private firstRun:boolean;

  constructor() { 
    this.titleID = "testID";
    this.firstRun = true;
  }

  ngOnInit() {
    this.titleID = this.chartID;
  }

  ngOnChanges() {
    if (!this.firstRun) {
      Plotly.newPlot(this.titleID, this.data, this.layout, {displayModeBar: false});
    }
  }

  ngAfterViewInit() {
    this.firstRun = false;
    Plotly.newPlot(this.titleID, this.data, this.layout, {displayModeBar: false});

  }
}
