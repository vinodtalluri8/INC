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
  controlForm: FormGroup;
  mockMultiDropDownData;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router:Router) {
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
  this.router.navigate(['matrix/controlEvidence']); 
  }

  resetForm(){
    this.controlForm.reset();
  }

}
