import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-update-control-objective',
  templateUrl: './update-control-objective.component.html',
  styleUrls: ['./update-control-objective.component.css']
})
export class UpdateControlObjectiveComponent implements OnInit {

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
    { label: 'Control Objectives Maintenance', routerLink: ['/controlObjectivesMaintenance'] },
    { label: 'Control Objectives Update'}];

  }

  ngOnInit() {
  }
  resetAll(){

  }

}
