import { Component } from '@angular/core';
import { QuickActionsComponent } from '../../components/quick-actions/quick-actions.component';
import { WorklistComponent } from '../../components/worklist/worklist.component';
import { RecentPatientsComponent } from '../../components/recent-patients/recent-patients.component';
import { SidebarWidgetsComponent } from '../../components/sidebar-widgets/sidebar-widgets.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    QuickActionsComponent,
    WorklistComponent,
    RecentPatientsComponent,
    SidebarWidgetsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
