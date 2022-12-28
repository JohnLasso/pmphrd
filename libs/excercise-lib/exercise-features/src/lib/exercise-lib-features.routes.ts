import {Route} from "@angular/router";
import {ExerciseLibraryComponent} from "./exercise-library/exercise-library.component";

export const exerciseLibFeatureRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: ExerciseLibraryComponent}
];
