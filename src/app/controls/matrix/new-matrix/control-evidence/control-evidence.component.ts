import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatrixService } from '../../services/matrix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-evidence',
  templateUrl: './control-evidence.component.html',
  styleUrls: ['./control-evidence.component.css']
})
export class ControlEvidenceComponent implements OnInit {
  mockDropDownData: any = [];
  selectedSource;
  selectedEnhancementProject;
  trackingNumber;
  controlEvidence;
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
  }

disable() {
    if ( !this.selectedSource || !this.trackingNumber || !this.controlEvidence
      || !this.selectedEnhancementProject) {
      return true;
    } else {
      return false;
    }
  }

  // /* This method will reset all values to default */
  resetAll() {
  this.selectedSource = '';
  this.selectedEnhancementProject = '';
  this.trackingNumber = '';
  this.controlEvidence = '';
}

  saveControlEvidenceForm() {
    // if (!this.disable()) {
      this.dataJson = {
        'source': this.selectedSource,
        'businessFunction': this.selectedEnhancementProject,
        'trackingNumber': this.trackingNumber,
        'controlEvidence': this.controlEvidence
      };
    // }
    console.log('data.......', this.dataJson);
  }

}
