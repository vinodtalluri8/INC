import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risk-maintenance',
  templateUrl: './risk-maintenance.component.html',
  styleUrls: ['./risk-maintenance.component.css']
})
export class RiskMaintenanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
