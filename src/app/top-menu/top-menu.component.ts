import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
 menuItems = [
    { label: 'Angular demo', path: '/', type: 'logo' },
    { label: '', path: '', type: 'spacer' },
    { label: 'Home', path: '/', type: 'link' },
    { label: 'Name Probabilities', path: '/name-probabilities', type: 'link' },
    { label: 'Cat Facts', path: '/cat-facts', type: 'link' },
    { label: 'All Users', path: '/all-users', type: 'link' },
    { label: 'Login', path: '/login', type: 'link' }
  ];
}
