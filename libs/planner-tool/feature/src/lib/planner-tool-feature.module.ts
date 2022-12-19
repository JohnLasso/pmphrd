import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { plannerToolFeatureRoutes } from './planner-tool-feature.routes';
import { PlannerComponent } from './planner/planner.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@workout/material';
import { TabComponent } from './ui/tab/tab.component';
import { TotalPerWeekComponent } from './total-per-week/total-per-week.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(plannerToolFeatureRoutes),
    AgGridModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [PlannerComponent, TabComponent, TotalPerWeekComponent],
  exports: [TabComponent],
})
export class PlannerToolFeatureModule {}
