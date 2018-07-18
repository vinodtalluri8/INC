import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from "../../../maintenance/services/maintenance.service";

@Component({
  selector: 'app-select-matrix',
  templateUrl: './select-matrix.component.html',
  styleUrls: ['./select-matrix.component.css']
})
export class SelectMatrixComponent implements OnInit {

  mockDropDownData;
  selectedGroup;
  matrixType;
  internalControl;
  dataJson;

  constructor(private dropdownService: MaintenanceService) { }

  ngOnInit() {
    this.dropdownService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
  }

    disable() {
    if (!this.selectedGroup  || !this.matrixType || !this.internalControl ) {
      return true;
    } else {
      return false;
    }
  }

  saveData(){
        if (!this.disable()) {
      this.dataJson = {
        'group': this.selectedGroup,
        'matrixType': this.matrixType,
        'internalControl': this.internalControl
      };
    }

    console.log('dataJson',this.dataJson);
  }
  resetAll(){
    this.selectedGroup = '';
    this.matrixType = '';
    this.internalControl = '';
  }
}
