import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-process',
  templateUrl: './business-process.component.html',
  styleUrls: ['./business-process.component.css']
})
export class BusinessProcessComponent implements OnInit {
  mockDropDownData: any = [];
  businessProcessForm: FormGroup;

  constructor(private fb: FormBuilder) {
  this.mockDropDownData = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ]; 
  this.createbusinessProcessForm();
   }

  ngOnInit() {
  }

  createbusinessProcessForm() {
    this.businessProcessForm = this.fb.group({
      businessProcess: ['', Validators.required ],
      applicableTo: ['', Validators.required ]
    });
  }

  onSubmit() {
   console.log('Form data',this.businessProcessForm.value);
  }

  resetForm(){
    this.businessProcessForm.reset();
  }

}
