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
  selectedCertificationResponsibility;
  selectedInherentRiskRating;
  selectedmatrixType;
  selectedRelatedSystems;
  selectedControlRiskRating;
  dataJson;
  certificateResponseJson;

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
  disable() {
    if ( !this.selectedbusinessFunction || !this.selectedmatrixType || !this.selectedCertificationResponsibility 
      || !this.processOverview) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.selectedGroup = '';
  this.matrixName = '';
  this.processOverview = '';
  this.selectedbusinessFunction = '';
  this.selectedCertificationResponsibility = [];
  this.selectedInherentRiskRating = '';
  this.selectedmatrixType = '';
  this.selectedRelatedSystems = [];
  this.selectedControlRiskRating = '';
}

  saveKeyControl() {
    // if (!this.disable()) {
      this.generateCertificateResponseJson();
      this.generateRelatedSystemsJson();
      this.dataJson = {
        'group': this.selectedGroup,
        'businessFunction': this.selectedbusinessFunction,
        'matrixType': this.selectedmatrixType,
        'matrixName': this.matrixName,
        'certificationResponsibility': this.certificateResponseJson,
        'relatedSystems': this.certificateResponseJson,
        'processOverview': this.processOverview,
        'inherentRiskRating': this.selectedInherentRiskRating,
        'controlRiskRating': this.selectedControlRiskRating
      };
    // }
    console.log('data.......',this.dataJson);
  }

    generateCertificateResponseJson() {
    for (let i = 0; i < this.selectedCertificationResponsibility.length; i++) {
      this.certificateResponseJson.push({
        'certificateResponseId': this.selectedCertificationResponsibility[i],
        'certificateResponseName': this.selectedCertificationResponsibility[i]
      });
    }
  }

      generateRelatedSystemsJson() {
    for (let i = 0; i < this.selectedRelatedSystems.length; i++) {
      this.certificateResponseJson.push({
        'relatedSystemsId': this.selectedRelatedSystems[i],
        'relatedSystemsName': this.selectedRelatedSystems[i]
      });
    }
  }

}
