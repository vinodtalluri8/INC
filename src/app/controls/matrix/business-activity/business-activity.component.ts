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
  // BusinessActivityForm: FormGroup;
  mockMultiDropDownData;
  selectedTitle;
  activity;
  subActivity;
  selectedenhancementProject;
  trackingNumber;
  dataJson;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router:Router) {
// this.createBusinessActivityForm();
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

  //   createBusinessActivityForm() {
  //   this.BusinessActivityForm = this.fb.group({
  //     title: '',
  //     subActivity: '',
  //     implementationState: ['', Validators.required ],
  //     activity: ['', Validators.required ],
  //     enhancementProject: ['', Validators.required ],
  //     trackingNumber: ['', Validators.required ]
  //   });
  // }

  // onSubmit() {
  //  console.log('Form data',this.BusinessActivityForm.value);
  //   this.router.navigate(['matrix/control']); 
  // }

  // resetForm(){
  //   this.BusinessActivityForm.reset();
  // }

  disable() {
    if ( !this.activity || !this.selectedenhancementProject || !this.trackingNumber) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.selectedTitle = '';
  this.activity = '';
  this.subActivity = '';
  this.selectedenhancementProject = '';
  this.trackingNumber = '';
}

  savebusinessActivityForm() {
    // if (!this.disable()) {
      this.dataJson = {
        'title': this.selectedTitle,
        'activity': this.activity,
        'subActivity': this.subActivity,
        'enhancementProject': this.selectedenhancementProject,
        'trackingNumber': this.trackingNumber
      };
    // }
    console.log('data.......',this.dataJson);
  }
}
