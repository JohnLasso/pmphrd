import { Route } from '@angular/router';
import {PlannerComponent} from "./planner/planner.component";
import {TabComponent} from "./ui/tab/tab.component";

export const plannerToolFeatureRoutes: Route[] = [
   {path: '', pathMatch: 'full', component: TabComponent}
];
