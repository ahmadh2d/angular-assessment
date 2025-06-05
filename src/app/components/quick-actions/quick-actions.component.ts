import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-actions',
  imports: [MatIconModule, CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css',
})
export class QuickActionsComponent {
  actions = [
    {
      name: 'Potilaan tarkastelu',
      icon: 'description',
    },
    {
      name: 'Potilaan vierit',
      icon: 'tune',
      badge: '1',
    },
    {
      name: 'Lääkärin vierit',
      icon: 'medical_services',
    },
    {
      name: 'Työajat',
      icon: 'schedule',
    },
    {
      name: 'Kalenteri',
      icon: 'calendar_today',
    },
    {
      name: 'Asetukset',
      icon: 'settings',
    },
    {
      name: 'Terveysportti',
      icon: 'local_hospital',
    },
  ];

  actionClick(action: string) {
    console.log(action + ' clicked');
  }
}
