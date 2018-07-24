import { Routes, RouterModule } from '@angular/router';
import { SideNavLayoutComponent } from '../layouts/side-nav-layout/side-nav-layout.component';
import { NgModule } from '@angular/core';

export const homeRoutes: Routes = [
  {
    path: 'sidenav',
    component: SideNavLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
