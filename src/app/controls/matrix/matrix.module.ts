import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralMatrixInfoComponent } from './general-matrix-info/general-matrix-info.component';
import { MatrixComponent } from './matrix.component';
import {DropdownModule} from 'primeng/dropdown';

import { MatrixTabComponent } from './matrix-tab/matrix-tab.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { BusinessActivityComponent } from './business-activity/business-activity.component';
import { ControlComponent } from './control/control.component';
import { ControlEvidenceComponent } from './control-evidence/control-evidence.component';
import { BusinessProcessComponent } from './business-process/business-process.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    TabMenuModule,
    SharedModule,
    MultiSelectModule,
    RadioButtonModule,
ReactiveFormsModule
  ],
  declarations: [MatrixComponent,
     GeneralMatrixInfoComponent,
      MatrixTabComponent, RiskAssessmentComponent,
       BusinessActivityComponent, ControlComponent,
        ControlEvidenceComponent, BusinessProcessComponent]
})
export class MatrixModule { }
