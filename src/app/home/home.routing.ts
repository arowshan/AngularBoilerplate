import { Routes, RouterModule } from '@angular/router';
import { SideNavLayoutComponent } from '../layouts/side-nav-layout/side-nav-layout.component';
import { NgModule } from '@angular/core';
import { GenericFormComponent } from '../generic-form/generic-form.component';
import { SideMainLayoutComponent } from '../layouts/side-main-layout/side-main-layout.component';
import { SideMainSideLayoutComponent } from '../layouts/side-main-side-layout/side-main-side-layout.component';

export const homeRoutes: Routes = [
  {
    path: 'genericform',
    component: GenericFormComponent
  },
  {
    path: 'sidemain',
    component: SideMainLayoutComponent
  },
  { path: 'sidemainside', component: SideMainSideLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
