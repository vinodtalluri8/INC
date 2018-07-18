import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  itemsPath: MenuItem[];
  constructor() { 
        this.itemsPath = [
      { label: 'Audit'},
      { label: 'Create Program Instance', routerLink: 'createProgramInstance'},
      ];
  }

  ngOnInit() {
  }

}
