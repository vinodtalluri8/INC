import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-topmenu',
  templateUrl: './navbar-topmenu.component.html',
  styleUrls: ['./navbar-topmenu.component.css']
})
export class NavbarTopmenuComponent implements OnInit {
  @Input() navItems;
  constructor() { }

  ngOnInit() {
  }

}
