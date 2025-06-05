import { Component } from '@angular/core';
import { NotepadComponent } from '../notepad/notepad.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-worklist',
  imports: [NotepadComponent, MatExpansionModule, MatIconModule, CommonModule],
  templateUrl: './worklist.component.html',
  styleUrl: './worklist.component.css',
})
export class WorklistComponent {
  worklistItems = [
    {
      time: '09:00 AM',
      patient: 'Juha Lahtinen',
      patientId: '240545-123Y',
      status: 'Etävastaanotito',
      description:
        'Hei tohtori, kiitos, että hyväksyitte tapaamisen. Tarvitsen apua uusien oireideni kanssa, joita aloin kokea viime viikolla.',
      statusColor: 'bg-blue-100 text-blue-800',
      actions: ['Avaa etävastaanotito', 'Avaa potilaan', 'Vieritit'],
    },
    {
      time: '09:45 AM',
      patient: 'Kaarina Mäkinen',
      patientId: '210637-963A',
      status: 'Etävastaanotito',
      description: '',
      statusColor: 'bg-blue-100 text-blue-800',
      actions: ['Avaa etävastaanotito', 'Avaa potilaan', 'Vieritit'],
    },
    {
      time: '10:30 AM',
      patient: 'Antti Virtanen',
      patientId: '060526-741B',
      status: 'Vastaanotito',
      description: '',
      statusColor: 'bg-green-100 text-green-800',
      actions: ['Aloita vastaanotio', 'Avaa potilaan', 'Vieritit'],
    },
    {
      time: '11:15 AM',
      patient: 'Mari Hiltinen',
      patientId: '060526-741B',
      status: 'Hoitopuhelu',
      description: '',
      statusColor: 'bg-purple-100 text-purple-800',
      actions: ['Avaa etävastaanotito', 'Avaa potilaan', 'Vieritit'],
    },
    {
      time: '01:00 PM',
      patient: 'Petri Niemi',
      patientId: '060526-741B',
      status: 'Konsultaatio',
      description: '',
      statusColor: 'bg-orange-100 text-orange-800',
      actions: ['Aloita vastaanotio', 'Avaa potilaan', 'Vieritit'],
    },
    {
      time: '02:15 PM',
      patient: 'Laura Leppänen',
      patientId: '151139-258D',
      status: 'Etävastaanotito',
      description: '',
      statusColor: 'bg-blue-100 text-blue-800',
      actions: ['Avaa etävastaanotito', 'Avaa potilaan', 'Vieritit'],
    },
  ];
}
