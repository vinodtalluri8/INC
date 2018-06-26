import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatrixRoutingModule } from './matrix-routing.module';
import { GeneralMatrixInfoComponent } from './general-matrix-info/general-matrix-info.component';
import { MatrixComponent } from './matrix.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    MatrixRoutingModule,
    DropdownModule
  ],
  declarations: [MatrixComponent, GeneralMatrixInfoComponent]
})
export class MatrixModule { }
