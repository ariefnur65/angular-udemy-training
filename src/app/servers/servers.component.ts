import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  // selector: '[app-servers]', -> can make app-servers becomes attribute of an element
  // tslint:disable-next-line:component-selector
  // selector: '.app-servers', -> can make app-servers becomes a class of an element
  selector: 'app-servers',
  template: ` <app-server></app-server>
    <app-server></app-server>`,
  // templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
