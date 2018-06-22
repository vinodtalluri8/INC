/**
 * This file should contains imported and exported
 * components for code module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
