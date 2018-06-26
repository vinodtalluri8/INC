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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MessagesModule,
    MessageModule,
    AngularFontAwesomeModule
  ],
  declarations: [KeycontrolsComponent,
    AddKeyControlsComponent,
    EditKeyControlsComponent,
    AuditComponent,
    CoreProgramsComponent,
    MaintenanceComponent],
  providers: [
    DepartmentsService,
    CategoryService,
    NatureOfControlsService,
    ProcessService,
    AddKeyControlService],
})
export class ControlsModule { }
