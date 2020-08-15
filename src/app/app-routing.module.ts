import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteEnum } from './shared/enum/route-enum';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieComponent } from './movie/movie.component';
import { Top100Component } from './top100/top100.component';

const routes: Routes = [
  {
    path: RouteEnum.EMPTY,
    component: DashboardComponent
  },
  {
    path: RouteEnum.TOP100,
    component: Top100Component
  },
  {
    path:'movie/:id', // RouteEnum.MOVIE
    component: MovieComponent
  },
  {
    path: RouteEnum.WILDCARD,
    redirectTo: RouteEnum.EMPTY
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
