import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-matrix-tab',
  templateUrl: './matrix-tab.component.html',
  styleUrls: ['./matrix-tab.component.css']
})
export class MatrixTabComponent implements OnInit {
  items: MenuItem[];
  constructor() { }
  ngOnInit() {
      this.items = [
          {label: 'General Matrix Information', url: 'generalMatrixInformation'},
          {label: 'Risk Assessment', url: 'riskAssessment'},
          {label: 'Business Process', url: 'businessProcess'},
          {label: 'Business Activity', url: 'businessActivity'},
          {label: 'Control', url: 'control'},
          {label: 'Control Evidence', url: 'controlEvidence'}
      ];
  }

}
