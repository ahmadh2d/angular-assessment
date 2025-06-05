import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-widgets',
  imports: [MatIconModule, CommonModule],
  templateUrl: './sidebar-widgets.component.html',
  styleUrl: './sidebar-widgets.component.css',
})
export class SidebarWidgetsComponent {
  widgets = [
    {
      name: 'Sairaalalaheteet',
      icon: 'folder',
    },
    {
      name: 'Laboratoriotulaus',
      icon: 'group',
    },
    {
      name: 'Todistukset',
      icon: 'description',
    },
    {
      name: 'Reseptit',
      icon: 'receipt',
    },
    {
      name: 'Kuvantaminen',
      icon: 'image',
    },
    {
      name: 'Lääkelista',
      icon: 'list',
      href: '#',
    },
    {
      name: '',
      icon: 'add',
    },
  ];

  widgetClick(widget: string) {
    console.log(widget + ' clicked');
  }
}
