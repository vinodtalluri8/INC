/**
 * This file should contains imported and exported
 * components for Shared module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { CalenderComponent } from './components/calender/calender.component';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule, InputTextareaModule, InputTextModule, DropdownModule, ButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { InputTextAreaComponent } from './components/input-text-area/input-text-area.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipModule } from 'primeng/tooltip';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonCancelComponent } from './components/button-cancel/button-cancel.component';

import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    CalendarModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,
    BreadcrumbModule,
    DialogModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MultiselectComponent,
    CalenderComponent,
    InputComponent,
    InputTextAreaComponent,
    DropdownComponent,
    ButtonComponent,
    TooltipComponent,
    BreadcrumbsComponent,
    ButtonCancelComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    MultiselectComponent,
    InputComponent,
    InputTextAreaComponent,
    DropdownComponent,
    ButtonComponent,
    CalenderComponent,
    TooltipComponent, BreadcrumbsComponent,
    ButtonCancelComponent]
})
export class SharedModule { }
