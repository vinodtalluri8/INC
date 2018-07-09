import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from "../services/matrix.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  mockDropDownData;
  // controlForm: FormGroup;
  mockMultiDropDownData;
  isCheckedChecklist = false;
  controlText;
  selectedGroup;
  selectedAditionalProcedure;
  businessContinuity;
  trackingNumber;
  selectedcheckList;
  selectedFramework;
  selectedEnhancementProject;
  selectedControl;
  selectedElements;
  comment;
  selectedProcedure;
  selectedManagementAssertion;
  dataJson;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router: Router) {
    // this.createcontrolForm();
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

  // createcontrolForm() {
  //     this.controlForm = this.fb.group({
  //       group: '',
  //       aditionalProcedure: '',
  //       businessContinuity: ['', Validators.required],
  //       trackingNumber: ['', Validators.required],
  //       checklist: ['', Validators.required],
  //       framework: ['', Validators.required],
  //       comment: ['', Validators.required],
  //       control: ['', Validators.required],
  //       elements: ['', Validators.required],
  //       implementationState: '',
  //       procedure: '',
  //       managementAssertion: '',
  //       enhancementProject: ['', Validators.required]
  //     });
  // }

  // onSubmit() {
  //   console.log('Form data', this.controlForm.value);
  //   this.router.navigate(['matrix/controlEvidence']);
  // }

  // resetForm() {
  //   this.controlForm.reset();
  // }

  // checkLisItem() {
  //   if (this.isCheckedChecklist === false) {
  //     console.log('this.isCheckedChecklist', this.isCheckedChecklist);
  //     this.isCheckedChecklist = true;
  //   }
  //   else {
  //     console.log('this.isCheckedChecklist', this.isCheckedChecklist);
  //     this.isCheckedChecklist = false;
  //   }
  //   this.createcontrolForm();
  // }

    /* This method will enable or disable the Save button based on the mandatory fields selected */
  // disable() {
  //   if ( !this.selectedbusinessFunction || !this.selectedmatrixType || !this.selectedCertificationResponsibility 
  //     || !this.processOverview) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // /* This method will reset all values to default */
  resetAll() {
  this.controlText = '';
  this.selectedGroup = '';
  this.selectedAditionalProcedure = [];
  this.businessContinuity = '';
  this.trackingNumber = '';
  this.selectedcheckList = '';
  this.selectedFramework = '';
  this.selectedEnhancementProject = '';
  this.selectedControl = '';
  this.selectedElements = [];
  this.comment = '';
  this.selectedProcedure = '';
  this.selectedManagementAssertion = [];
}

  saveControlForm() {
    // if (!this.disable()) {
      // this.generateCertificateResponseJson();
      // this.generateRelatedSystemsJson();
      this.dataJson = {
        'controlText': this.controlText,
        'group': this.selectedGroup,
        'aditionalProcedure': this.selectedAditionalProcedure,
        'businessContinuity': this.businessContinuity,
        'trackingNumber': this.trackingNumber,
        'checkList': this.selectedcheckList,
        'framework': this.selectedFramework,
        'enhancementProject': this.selectedEnhancementProject,
        'control': this.selectedControl,
        'elements': this.selectedElements,
        'comment': this.comment,
        'procedure': this.selectedProcedure,
        'managementAssertion': this.selectedManagementAssertion
      };
    // }
    console.log('data.......',this.dataJson);
  }

}
