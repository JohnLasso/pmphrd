import { Route } from '@angular/router';
import {PlannerComponent} from "./planner/planner.component";

export const plannerToolFeatureRoutes: Route[] = [
   {path: '', pathMatch: 'full', component: PlannerComponent}
];
