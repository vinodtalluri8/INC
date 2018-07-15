
/**
 * This file should contains all logic
 * or the data releated to side nav bar
 */

import {
  Component, OnDestroy, ViewEncapsulation, Input, HostListener, Inject, OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, RouterLink, UrlSegment, RouterLinkActive } from '@angular/router';
import {
  MediaChange,
  MatchMedia,
  ObservableMedia,
  BreakPointRegistry
} from '@angular/flex-layout';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems = [
    {
      displayName: 'Matrix',
      children: [
        {
          displayName: 'New Matrix',
          route: 'Matrix'
        }]
    },
    {
      displayName: 'Key Controls',
      route: 'keycontrols'
    },
     {
      displayName: 'Core Programs',
    },
     {
      displayName: 'Audit',
    },
     {
      displayName: 'Maintenance',
      children: [
        {
          displayName: 'Control Objectives Maintenance',
          route: 'controlObjectivesMaintenance'
        },
        {
          displayName: 'Risk Maintenance',
          route: 'riskMaintenance'
        }]
    }
  ];
  ngOnInit() {
  }

}
