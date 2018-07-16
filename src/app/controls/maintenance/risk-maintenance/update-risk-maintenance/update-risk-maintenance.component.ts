import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-update-risk-maintenance',
  templateUrl: './update-risk-maintenance.component.html',
  styleUrls: ['./update-risk-maintenance.component.css']
})
export class UpdateRiskMaintenanceComponent implements OnInit {

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
    { label: 'Risk Update'}];
  }

  ngOnInit() {
  }

}
