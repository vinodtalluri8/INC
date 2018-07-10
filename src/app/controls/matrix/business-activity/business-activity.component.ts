import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../services/matrix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-activity',
  templateUrl: './business-activity.component.html',
  styleUrls: ['./business-activity.component.css']
})
export class BusinessActivityComponent implements OnInit {
  mockDropDownData;
  mockMultiDropDownData;
  selectedTitle;
  activity;
  subActivity;
  selectedenhancementProject;
  trackingNumber;
  dataJson;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router: Router) {
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
    console.log('data.......', this.dataJson);
  }
}
