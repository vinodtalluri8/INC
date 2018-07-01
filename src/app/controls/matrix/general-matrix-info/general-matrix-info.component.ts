import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../services/matrix.service';

@Component({
  selector: 'app-general-matrix-info',
  templateUrl: './general-matrix-info.component.html',
  styleUrls: ['./general-matrix-info.component.css']
})
export class GeneralMatrixInfoComponent implements OnInit {
  mockDropDownData;
  generalMatrixForm: FormGroup;
  mockMultiDropDownData;

  constructor(private fb: FormBuilder, private matrixService: MatrixService) {
    this.createGeneralMatrixForm();
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
  createGeneralMatrixForm() {
    this.generalMatrixForm = this.fb.group({
      group: '',
      matrixName: ['', Validators.required],
      processOverview: ['', Validators.required],
      businessFunction: ['', Validators.required],
      certificationResponsibility: ['', Validators.required],
      inherentRiskRating: '',
      matrixType: ['', Validators.required],
      relatedSystems: '',
      controlRiskRating: ''
    });
  }

  onSubmit() {
    console.log('Form data', this.generalMatrixForm.value);
  }

  resetForm() {
    this.generalMatrixForm.reset();
  }
}
