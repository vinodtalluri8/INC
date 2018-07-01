import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      source: ['', Validators.required ],
      enhancementProject: ['', Validators.required ],
      controlEvidence: ['', Validators.required ],
      trackingNumber: ['', Validators.required ],
      implementationState: ''
    });
  }

  onSubmit() {
   console.log('Form data',this.ControlEvidenceForm.value);
  //  this.router.navigate(['matrix/businessProcess']);
  }

  resetForm(){
    this.ControlEvidenceForm.reset();
  }

}
