import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-new-control-objective',
  templateUrl: './new-control-objective.component.html',
  styleUrls: ['./new-control-objective.component.css']
})
export class NewControlObjectiveComponent implements OnInit {

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

    this.itemsPath = [{ label: 'Maintenance'},
    { label: 'Control Objectives Maintenance',routerLink: ['/controlObjectivesMaintenance'] },
    { label: 'New Control Objective'}];
   }

  ngOnInit() {
  }
  resetAll(){

  }
}
