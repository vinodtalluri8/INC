import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatrixService } from "../services/matrix.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-business-activity',
  templateUrl: './business-activity.component.html',
  styleUrls: ['./business-activity.component.css']
})
export class BusinessActivityComponent implements OnInit {
  mockDropDownData;
  BusinessActivityForm: FormGroup;
  mockMultiDropDownData;
  ImplementedCheck = false;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router:Router) {
this.createBusinessActivityForm();
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
    this.router.navigate(['matrix/control']); 
  }

  resetForm(){
    this.BusinessActivityForm.reset();
  }

  ImplementationState(value) {
    console.log('implemented value..........', value);
    if(value == "Implemented"){
      this.ImplementedCheck = false;
      this.BusinessActivityForm.removeControl('enhancementProject');
      this.BusinessActivityForm.removeControl('trackingNumber');
    }else if(value == "Will be Implemented"){
      this.ImplementedCheck = true;
      this.BusinessActivityForm.addControl('enhancementProject', new FormControl('', Validators.required));
      this.BusinessActivityForm.addControl('trackingNumber', new FormControl('', Validators.required));
    }
  }

}
