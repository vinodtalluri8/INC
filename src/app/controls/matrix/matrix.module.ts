import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatrixRoutingModule } from './matrix-routing.module';
import { GeneralMatrixInfoComponent } from './general-matrix-info/general-matrix-info.component';
import { MatrixComponent } from './matrix.component';

@NgModule({
  imports: [
    CommonModule,
    MatrixRoutingModule,
  ],
  declarations: [MatrixComponent, GeneralMatrixInfoComponent]
})
export class MatrixModule { }
