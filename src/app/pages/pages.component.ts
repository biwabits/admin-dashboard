import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'axl-pages',
  template: `
    <axl-main-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </axl-main-layout>
  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  menu = MENU_ITEMS;

}
