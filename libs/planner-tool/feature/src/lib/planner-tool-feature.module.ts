import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { plannerToolFeatureRoutes } from './lib.routes';
import { PlannerComponent } from './planner/planner.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(plannerToolFeatureRoutes)],
  declarations: [PlannerComponent],
  exports: [PlannerComponent]
})
export class PlannerToolFeatureModule {}
