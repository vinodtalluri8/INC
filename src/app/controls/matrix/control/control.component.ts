import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatrixService } from "../services/matrix.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  mockDropDownData;
  controlForm: FormGroup;
  mockMultiDropDownData;
  isCheckedChecklist = true;
  commentCheck = true;
  ImplementedCheck = false;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router: Router) {
    this.createcontrolForm();
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

  createcontrolForm() {
      this.controlForm = this.fb.group({
        'group': '',
        'aditionalProcedure': '',
        'businessContinuity': ['', Validators.required],
        'trackingNumber': ['', Validators.required],
        'checklist': ['', Validators.required],
        'framework': ['', Validators.required],
        'comment': ['', Validators.required],
        'control': ['', Validators.required],
        'elements': ['', Validators.required],
        'implementationState': '',
        'procedure': '',
        'managementAssertion': '',
        'enhancementProject': ['', Validators.required],
        'controlText': ''
      });
  }

  onSubmit() {
    console.log('Form data', this.controlForm.value);
    this.router.navigate(['matrix/controlEvidence']);
  }

  resetForm() {
    this.controlForm.reset();
  }

  checkLisItem() {
    if (this.isCheckedChecklist === true) {
      console.log('this.isCheckedChecklist', this.isCheckedChecklist);
      this.controlForm.removeControl('group');
      this.controlForm.removeControl('checklist');
      this.controlForm.removeControl('control');
      this.isCheckedChecklist = false;
      this.controlForm.addControl('controlText', new FormControl(''));
    } else {
      console.log('this.dgfgdgddggdgdg', this.isCheckedChecklist);
      this.controlForm.removeControl('controlText');
      this.controlForm.addControl('group', new FormControl(''));
      this.controlForm.addControl('checklist', new FormControl('', Validators.required));
      this.controlForm.addControl('control', new FormControl('', Validators.required));

      this.isCheckedChecklist = true;

    }
  }

  ImplementationState(value) {
    console.log('implemented value..........', value);
    if(value == "Implemented"){
      this.ImplementedCheck = false;
      this.controlForm.removeControl('enhancementProject');
      this.controlForm.removeControl('trackingNumber');
    }else if(value == "Will be Implemented"){
      this.ImplementedCheck = true;
      this.controlForm.addControl('enhancementProject', new FormControl('', Validators.required));
      this.controlForm.addControl('trackingNumber', new FormControl('', Validators.required));
    }
  }
}
