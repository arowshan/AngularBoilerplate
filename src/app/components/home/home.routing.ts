import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GenericFormComponent } from '../generic-form/generic-form.component';
import { SideMainLayoutComponent } from '../layouts/side-main-layout/side-main-layout.component';
import { SideMainSideLayoutComponent } from '../layouts/side-main-side-layout/side-main-side-layout.component';
import { SidenavLinksComponent } from '../layouts/sidenav-links/sidenav-links.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { MiscComponent } from '../misc/misc.component';

export const homeRoutes: Routes = [
  {
    path: 'sidemain',
    component: SideMainLayoutComponent
  },
  { path: 'sidemainside', component: SideMainSideLayoutComponent },
  {
    path: 'sidenavlinks',
    component: SidenavLinksComponent,
    children: [
      { path: 'carousel', component: CarouselComponent },
      {
        path: 'genericform',
        component: GenericFormComponent
      },
      { path: 'misc', component: MiscComponent }
    ]
  }
];
