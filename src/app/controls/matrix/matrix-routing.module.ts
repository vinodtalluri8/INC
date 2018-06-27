import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatrixComponent } from './matrix.component';
import { GeneralMatrixInfoComponent } from './general-matrix-info/general-matrix-info.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { BusinessProcessComponent } from './business-process/business-process.component';
import { BusinessActivityComponent } from './business-activity/business-activity.component';
import { ControlComponent } from './control/control.component';
import { ControlEvidenceComponent } from './control-evidence/control-evidence.component';
const routes: Routes = [
  { path: '', redirectTo: '/matrix', pathMatch: 'full' },
  { path: 'matrix', component: MatrixComponent, 
  // outlet: 'matrixRoute', children: [
  //   { path: '', component: GeneralMatrixInfoComponent },
  //   { path: 'generalMatrixInformation', component: GeneralMatrixInfoComponent },
  //   { path: 'riskAssessment', component: RiskAssessmentComponent},
  //   { path: 'businessProcess', component: BusinessProcessComponent },
  //   { path: 'businessActivity', component: BusinessActivityComponent },
  //   { path: 'control', component: ControlComponent },
  //   { path: 'controlEvidence', component: ControlEvidenceComponent}]
  },
  { path: 'selectmatrix', component: MatrixComponent },
  { path: 'generalMatrixInformation', component: GeneralMatrixInfoComponent },
  { path: 'riskAssessment', component: RiskAssessmentComponent },
  { path: 'businessProcess', component: BusinessProcessComponent },
  { path: 'businessActivity', component: BusinessActivityComponent },
  { path: 'control', component: ControlComponent },
  { path: 'controlEvidence', component: ControlEvidenceComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixRoutingModule { }
