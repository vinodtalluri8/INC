import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  cities1: { name: string; code: string; }[];
  controlForm: FormGroup;
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
  this.createcontrolForm();
  }

  ngOnInit() {
  }

    createcontrolForm() {
    this.controlForm = this.fb.group({
      group: '',
      aditionalProcedure: '',
      businessContinuity: ['', Validators.required ],
      trackingNumber: ['', Validators.required ],
      checklist: ['', Validators.required ],
      framework: ['', Validators.required ],
      comment: ['', Validators.required ],
      control: ['', Validators.required ],
      elements: ['', Validators.required ],
      implementationState: '',
      procedure: '',
      managementAssertion: '',
      enhancementProject: ['', Validators.required ]
    });
  }

  onSubmit() {
   console.log('Form data',this.controlForm.value);
  }

  resetForm(){
    this.controlForm.reset();
  }

}
