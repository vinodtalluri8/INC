import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  items: MenuItem[];
  constructor() {
    this.items = [
      {label: 'General Matrix Information', routerLink: 'generalMatrixInformation'},
      {label: 'Risk Assessment', routerLink: 'riskAssessment'},
      {label: 'Business Process', routerLink: 'businessProcess'},
      {label: 'Business Activity', routerLink: 'businessActivity'},
      {label: 'Control', routerLink: 'control'},
      {label: 'Control Evidence', routerLink: 'controlEvidence'}
  ];
   }

  ngOnInit() {
  }

}
