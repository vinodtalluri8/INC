import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.css']
})
export class RiskAssessmentComponent implements OnInit {
  cities1:any = [];
  riskAssesmentForm: FormGroup;
  cars;

  constructor(private fb: FormBuilder) { 
    this.cities1 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ]; 

  this.cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];
  this.createriskAssesmentForm();
  }

  ngOnInit() {
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
  }

  resetForm(){
    this.riskAssesmentForm.reset();
  }
}
