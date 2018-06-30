import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-matrix-info',
  templateUrl: './general-matrix-info.component.html',
  styleUrls: ['./general-matrix-info.component.css']
})
export class GeneralMatrixInfoComponent implements OnInit {
  cities1: { name: string; code: string; }[];
  generalMatrixForm: FormGroup;
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
this.createGeneralMatrixForm();
}
  ngOnInit() {
  }

  createGeneralMatrixForm() {
    this.generalMatrixForm = this.fb.group({
      group: '',
      matrixName: ['', Validators.required ],
      processOverview: ['', Validators.required ],
      businessFunction: ['', Validators.required ],
      certificationResponsibility: ['', Validators.required ],
      inherentRiskRating: '',
      matrixType: ['', Validators.required ],
      relatedSystems: '',
      controlRiskRating: ''
    });
  }

  /* This method will reset all values to default */
  resetAll() {

  }
  onSubmit() {
   console.log('Form data',this.generalMatrixForm);
  }
  resetForm(){
    this.generalMatrixForm.reset();
  }
}
