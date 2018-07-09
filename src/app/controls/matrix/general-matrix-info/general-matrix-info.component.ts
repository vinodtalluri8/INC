import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../services/matrix.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-general-matrix-info',
  templateUrl: './general-matrix-info.component.html',
  styleUrls: ['./general-matrix-info.component.css']
})
export class GeneralMatrixInfoComponent implements OnInit {
    display: boolean;
  mockDropDownData;
  // generalMatrixForm: FormGroup;
  mockMultiDropDownData;
  selectedGroup;
  matrixName;
  processOverview;
  selectedbusinessFunction;
  changeCertificationResponsibility;
  selectedInherentRiskRating;
  selectedmatrixType;
  selectedRelatedSystems;
  selectedControlRiskRating;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router:Router) {
    // this.createGeneralMatrixForm();
  }
  ngOnInit() {
    this.preloadData();
  }
  preloadData() {
    this.matrixService.getMatrixData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
    this.matrixService.getMatrixMultiSelect().subscribe(
      (data) => {
        this.mockMultiDropDownData = data;
      }
    );
  }
  // createGeneralMatrixForm() {
  //   this.generalMatrixForm = this.fb.group({
  //     group: '',
  //     matrixName: ['', Validators.required],
  //     processOverview: ['', Validators.required],
  //     businessFunction: ['', Validators.required],
  //     certificationResponsibility: ['', Validators.required],
  //     inherentRiskRating: '',
  //     matrixType: ['', Validators.required],
  //     relatedSystems: '',
  //     controlRiskRating: ''
  //   });
  // }
  displayModel() {
    this.display = true;
  }
  // onSubmit() {
  //   console.log('Form data', this.generalMatrixForm.value);
  //   this.router.navigate(['matrix/riskAssessment']);
  // }

  // resetForm() {
  //   this.generalMatrixForm.reset();
  // }

    /* This method will enable or disable the Save button based on the mandatory fields selected */
  // disable() {
  //   if ((!this.selectedCategory || this.selectedCategory.length === 0) || !this.selectedDepartments || !this.selectedNatureOfControls
  //     || !this.title || !this.controlText || !this.activeDate || this.saved) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // /* This method will reset all values to default */
  resetAll() {
  this.selectedGroup = '';
  this.matrixName = '';
  this.processOverview = '';
  this.selectedbusinessFunction = '';
  this.changeCertificationResponsibility = '';
  this.selectedInherentRiskRating = '';
  this.selectedmatrixType = '';
  this.selectedRelatedSystems = '';
  this.selectedControlRiskRating = '';
  }
}
