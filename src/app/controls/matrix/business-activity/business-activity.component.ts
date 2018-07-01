import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

}
