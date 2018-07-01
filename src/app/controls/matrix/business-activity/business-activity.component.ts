import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-activity',
  templateUrl: './business-activity.component.html',
  styleUrls: ['./business-activity.component.css']
})
export class BusinessActivityComponent implements OnInit {
  mockDropDownData: { name: string; code: string; }[];
  BusinessActivityForm: FormGroup;
  mockMultiDropDownData;

  constructor(private fb: FormBuilder) {
         this.mockDropDownData = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
  this.mockMultiDropDownData = [
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
this.createBusinessActivityForm();
   }

  ngOnInit() {
  }

    createBusinessActivityForm() {
    this.BusinessActivityForm = this.fb.group({
      title: '',
      subActivity: '',
      implementationState: ['', Validators.required ],
      activity: ['', Validators.required ],
      enhancementProject: ['', Validators.required ],
      trackingNumber: ['', Validators.required ]
    });
  }

  onSubmit() {
   console.log('Form data',this.BusinessActivityForm.value);
  }

  resetForm(){
    this.BusinessActivityForm.reset();
  }

}
