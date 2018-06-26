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

const routes: Routes = [
  { path: '', redirectTo: '/matrix', pathMatch: 'full' },
  { path: 'keycontrols', component: KeycontrolsComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'matrix', component: MatrixComponent },
  { path: 'coreProgram', component: CoreProgramsComponent },
  { path: 'maintainence', component: MaintenanceComponent },
  { path: 'keycontrols/addKeyControl', component: AddKeyControlsComponent }
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
