import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatrixService } from "../services/matrix.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-control-evidence',
  templateUrl: './control-evidence.component.html',
  styleUrls: ['./control-evidence.component.css']
})
export class ControlEvidenceComponent implements OnInit {
  mockDropDownData:any = [];
  ControlEvidenceForm: FormGroup;
  ImplementedCheck = false;

  constructor(private fb: FormBuilder, private matrixService: MatrixService, private router:Router) {
  this.createControlEvidenceForm();
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

  createControlEvidenceForm() {
    this.ControlEvidenceForm = this.fb.group({
      "source": ['', Validators.required ],
      "enhancementProject": ['', Validators.required ],
      "controlEvidence": ['', Validators.required ],
      "trackingNumber": ['', Validators.required ],
      "implementationState": ''
    });
  }

  onSubmit() {
   console.log('Form data',this.ControlEvidenceForm.value);
  //  this.router.navigate(['matrix/businessProcess']);
  }

  resetForm(){
    this.ControlEvidenceForm.reset();
  }

  ImplementationState(value) {
    console.log('implemented value..........', value);
    if(value == "Implemented"){
      this.ImplementedCheck = false;
      this.ControlEvidenceForm.removeControl('enhancementProject');
      this.ControlEvidenceForm.removeControl('trackingNumber');
    }else if(value == "Will be Implemented"){
      this.ImplementedCheck = true;
      this.ControlEvidenceForm.addControl('enhancementProject', new FormControl('', Validators.required));
      this.ControlEvidenceForm.addControl('trackingNumber', new FormControl('', Validators.required));
    }
  }

}
