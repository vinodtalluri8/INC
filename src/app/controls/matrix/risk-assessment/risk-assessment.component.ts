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
  riskAssesmentForm: FormGroup;
  mockMultiDropDownData;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router:Router) {
  this.createriskAssesmentForm();
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
    createriskAssesmentForm() {
    this.riskAssesmentForm = this.fb.group({
      driverDescription: ['', Validators.required ],
      driverCategory: ['', Validators.required ],
      eventType: ['', Validators.required ]
    });
  }

  onSubmit() {
   console.log('Form data',this.riskAssesmentForm.value);
   this.router.navigate(['matrix/businessProcess']);
  }

  resetForm(){
    this.riskAssesmentForm.reset();
  }
}
