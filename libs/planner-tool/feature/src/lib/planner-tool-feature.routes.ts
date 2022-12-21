import { Route } from '@angular/router';
import {CardLayoutComponent} from "./ui/card-layout/card-layout.component";

export const plannerToolFeatureRoutes: Route[] = [
   {path: '', pathMatch: 'full', component: CardLayoutComponent}
];
