/**
 * This file should contains imported and exported
 * components for Controls module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycontrolsComponent } from './keycontrols/keycontrols.component';
import { AddKeyControlsComponent } from './keycontrols/add-key-controls/add-key-controls.component';
import { EditKeyControlsComponent } from './keycontrols/edit-key-controls/edit-key-controls.component';
import { AuditComponent } from './audit/audit.component';
import { CoreProgramsComponent } from './core-programs/core-programs.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentsService } from './keycontrols/services/departments.service';
import { CategoryService } from './keycontrols/services/category.service';
import { NatureOfControlsService } from './keycontrols/services/nature-of-controls.service';
import { ProcessService } from './keycontrols/services/process.service';
import { AddKeyControlService } from './keycontrols/services/add-key-control.service';
import { SharedModule } from '../shared/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
// tslint:disable-next-line:max-line-length
import { ControlObjectivesMaintenanceComponent } from './maintenance/control-objectives-maintenance/control-objectives-maintenance.component';
import { RiskMaintenanceComponent } from './maintenance/risk-maintenance/risk-maintenance.component';
import { NewControlObjectiveComponent } from './maintenance/control-objectives-maintenance/new-control-objective/new-control-objective.component';
import { UpdateControlObjectiveComponent } from './maintenance/control-objectives-maintenance/update-control-objective/update-control-objective.component';
import { RouterModule } from "@angular/router";
import { TableModule } from 'primeng/table';
import { NewRiskMaintenanceComponent } from './maintenance/risk-maintenance/new-risk-maintenance/new-risk-maintenance.component';
import { UpdateRiskMaintenanceComponent } from './maintenance/risk-maintenance/update-risk-maintenance/update-risk-maintenance.component';
import { MaintenanceService } from "./maintenance/services/maintenance.service";
import { CreateProgramInstanceComponent } from './audit/create-program-instance/create-program-instance.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MessagesModule,
    MessageModule,
    AngularFontAwesomeModule,
    RouterModule,
    TableModule
  ],
  declarations: [KeycontrolsComponent,
    AddKeyControlsComponent,
    EditKeyControlsComponent,
    AuditComponent,
    CoreProgramsComponent,
    MaintenanceComponent,
    ControlObjectivesMaintenanceComponent,
    RiskMaintenanceComponent,
    NewControlObjectiveComponent,
    UpdateControlObjectiveComponent,
    NewRiskMaintenanceComponent,
    UpdateRiskMaintenanceComponent,
    CreateProgramInstanceComponent],
  providers: [
    DepartmentsService,
    CategoryService,
    NatureOfControlsService,
    ProcessService,
    AddKeyControlService,
    MaintenanceService],
})
export class ControlsModule { }
