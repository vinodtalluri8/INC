/**
 * This file should contains all the logic related to breadcrumbs.
 * Any changes in this file will lead to changes in all the places
 * where ever its refered
 */
import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items: MenuItem[];
   home;
  constructor() { }

  ngOnInit() {
    this.home = {icon: 'fa fa-home'};

  }

}
