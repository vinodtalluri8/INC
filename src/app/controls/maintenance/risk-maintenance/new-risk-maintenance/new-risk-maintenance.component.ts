import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-new-risk-maintenance',
  templateUrl: './new-risk-maintenance.component.html',
  styleUrls: ['./new-risk-maintenance.component.css']
})
export class NewRiskMaintenanceComponent implements OnInit {

  itemsPath: MenuItem[];
  home: MenuItem;
  selectedProgram;
  mockDropDownData;
  BusinessProcess;
  mockMultiDropDownData;
  description;
  changeAditionalProcedure;
  selectedAditionalProcedure;
  title;

  constructor() {
    this.home = { icon: 'fa fa-home' };
    this.itemsPath = [{ label: 'Risk Maintenance', routerLink: ['/riskMaintenance']},
    { label: 'New Risk'}];
   }

  ngOnInit() {
  }

}
