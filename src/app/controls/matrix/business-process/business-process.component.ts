import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from "../services/matrix.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-business-process',
  templateUrl: './business-process.component.html',
  styleUrls: ['./business-process.component.css']
})
export class BusinessProcessComponent implements OnInit {

  mockDropDownData: any = [];
  businessProcessForm: FormGroup;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router:Router) {
  this.createbusinessProcessForm();
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
  }

  createbusinessProcessForm() {
    this.businessProcessForm = this.fb.group({
      businessProcess: ['', Validators.required ],
      applicableTo: ['', Validators.required ]
    });
  }

  onSubmit() {
   console.log('Form data',this.businessProcessForm.value);
     this.router.navigate(['matrix/businessActivity']); 
  }

  resetForm(){
    this.businessProcessForm.reset();
  }

}
