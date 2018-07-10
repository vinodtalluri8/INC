import { ControlEvidenceComponent } from './controls/matrix/control-evidence/control-evidence.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KeycontrolsComponent } from './controls/keycontrols/keycontrols.component';
import { CoreProgramsComponent } from './controls/core-programs/core-programs.component';
import { AuditComponent } from './controls/audit/audit.component';
import { MaintenanceComponent } from './controls/maintenance/maintenance.component';
import { MatrixComponent } from './controls/matrix/matrix.component';
import { ControlsModule } from './controls/controls.module';
import { AddKeyControlsComponent } from './controls/keycontrols/add-key-controls/add-key-controls.component';
import { GeneralMatrixInfoComponent } from './controls/matrix/general-matrix-info/general-matrix-info.component';
import { ControlComponent } from './controls/matrix/control/control.component';
import { BusinessActivityComponent } from './controls/matrix/business-activity/business-activity.component';
import { BusinessProcessComponent } from './controls/matrix/business-process/business-process.component';
import { RiskAssessmentComponent } from './controls/matrix/risk-assessment/risk-assessment.component';
// tslint:disable-next-line:max-line-length
import { ControlObjectivesMaintenanceComponent } from './controls/maintenance/control-objectives-maintenance/control-objectives-maintenance.component';
import { RiskMaintenanceComponent } from './controls/maintenance/risk-maintenance/risk-maintenance.component';

const routes: Routes = [
  { path: '', redirectTo: '/keycontrols', pathMatch: 'full' },
  { path: 'keycontrols', component: KeycontrolsComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'Matrix', component: MatrixComponent, children: [
    { path: '', redirectTo: 'generalMatrixInformation', pathMatch: 'full' },
    { path: 'generalMatrixInformation', component: GeneralMatrixInfoComponent },
    { path: 'riskAssessment', component: RiskAssessmentComponent},
    { path: 'businessProcess', component: BusinessProcessComponent },
    { path: 'businessActivity', component: BusinessActivityComponent },
    { path: 'control', component: ControlComponent },
    { path: 'controlEvidence', component: ControlEvidenceComponent}
  ]
},
  { path: 'coreProgram', component: CoreProgramsComponent },
  { path: 'keycontrols/addKeyControl', component: AddKeyControlsComponent },
  { path: 'maintainence', component: MaintenanceComponent },
  { path: 'controlObjectivesMaintenance', component: ControlObjectivesMaintenanceComponent },
  { path: 'RiskMaintenance', component: RiskMaintenanceComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ControlsModule
  ],
  exports: [RouterModule, ControlsModule],
  declarations: []
})
export class AppRoutingModule { }
