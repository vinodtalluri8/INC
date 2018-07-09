import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from "../services/matrix.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.css']
})
export class RiskAssessmentComponent implements OnInit {
  mockDropDownData:any = [];
  // riskAssesmentForm: FormGroup;
  mockMultiDropDownData;
  driverDescription;
  selectedDriverCategory;
  selectedEventType;
  dataJson;
  driverCategoryJson;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router:Router) {
  // this.createriskAssesmentForm();
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
  //   createriskAssesmentForm() {
  //   this.riskAssesmentForm = this.fb.group({
  //     driverDescription: ['', Validators.required ],
  //     driverCategory: ['', Validators.required ],
  //     eventType: ['', Validators.required ]
  //   });
  // }

  // onSubmit() {
  //  console.log('Form data',this.riskAssesmentForm.value);
  //  this.router.navigate(['matrix/businessProcess']);
  // }

  // resetForm(){
  //   this.riskAssesmentForm.reset();
  // }

   disable() {
    if ( !this.driverDescription || !this.selectedDriverCategory || !this.selectedEventType) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.driverDescription = '';
  this.selectedDriverCategory = [];
  this.selectedEventType = [];
  }

  saveriskAssessmentForm() {
    // if (!this.disable()) {
      this.generateDriverCategoryJson();
      this.dataJson = {
        'driverDescription': this.driverDescription,
        'driverCategory': this.selectedDriverCategory,
        'eventType': this.selectedEventType
      };
    // }
    console.log('data.......',this.dataJson);
  }

    generateDriverCategoryJson() {
    for (let i = 0; i < this.selectedDriverCategory.length; i++) {
      this.driverCategoryJson.push({
        'driverCategoryId': this.selectedDriverCategory[i],
        'driverCategoryName': this.selectedDriverCategory[i]
      });
    }
  }
}
