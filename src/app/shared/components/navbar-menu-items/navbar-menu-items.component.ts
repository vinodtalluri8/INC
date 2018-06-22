import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar-menu-items',
  templateUrl: './navbar-menu-items.component.html',
  styleUrls: ['./navbar-menu-items.component.css']
})
export class NavbarMenuItemsComponent implements OnInit {

  @Input() items;
  @ViewChild('childMenu') public childMenu;

  constructor() { }

  ngOnInit() {
  }

}
