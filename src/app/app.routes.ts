import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'patient-form',
    // Lazy load PatientFormPageComponent
    loadComponent: () =>
      import('./pages/patient-form/patient-form.component').then(m => m.PatientFormComponent),
    title: 'Patient Form',
  },
  {
    path: 'dashboard',
    // Lazy load DashboardPageComponent (assuming it's standalone)
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        // Adjust path as needed
        m => m.DashboardComponent
      ),
    title: 'Dashboard',
  },
  // Other routes within this layout
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
