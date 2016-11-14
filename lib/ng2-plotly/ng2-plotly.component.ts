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
    this.chartID = "";
    this.firstRun = true;
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.firstRun) {
      Plotly.newPlot(this.titleID, this.data, this.layout);
    }
  }

  ngAfterViewInit() {
    this.firstRun = false;
    Plotly.newPlot(this.titleID, this.data, this.layout);

  }
}
