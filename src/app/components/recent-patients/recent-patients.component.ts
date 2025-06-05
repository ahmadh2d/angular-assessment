import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recent-patients',
  imports: [NgFor, MatIconModule],
  templateUrl: './recent-patients.component.html',
  styleUrl: './recent-patients.component.css',
})
export class RecentPatientsComponent {
  patients = [
    {
      name: 'Olavi Virtanen',
      patientId: '240545-123Y',
    },
    {
      name: 'Juhani Korhonen',
      patientId: '010132-123Y',
    },
    {
      name: 'Riikka Mäkelä',
      patientId: '150242-456K',
    },
    {
      name: 'Mikko Nieminen',
      patientId: '300630-789P',
    },
    {
      name: 'Aino Salminen',
      patientId: '010141-321N',
    },
    {
      name: 'Pekka Laine',
      patientId: '011283-432M',
    },
  ];

  patientClick(patient: string) {
    console.log(patient + ' clicked');
  }
}
