import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-evidence',
  templateUrl: './control-evidence.component.html',
  styleUrls: ['./control-evidence.component.css']
})
export class ControlEvidenceComponent implements OnInit {
  cities1:any = [];
  ControlEvidenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
     this.cities1 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ]; 
  this.createControlEvidenceForm();
   }

  ngOnInit() {
  }

  createControlEvidenceForm() {
    this.ControlEvidenceForm = this.fb.group({
      source: ['', Validators.required ],
      enhancementProject: ['', Validators.required ],
      controlEvidence: ['', Validators.required ],
      trackingNumber: ['', Validators.required ],
      implementationState: ''
    });
  }

  onSubmit() {
   console.log('Form data',this.ControlEvidenceForm.value);
  }

  resetForm(){
    this.ControlEvidenceForm.reset();
  }

}
