import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// End of Components

import { AppRoutingModule } from 'src/app/app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Modules
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule
} from '@angular/material';

// Components
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { GridLayoutComponent } from './components/layouts/grid-layout/grid-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginLogoutButtonComponent } from './components/login-logout-button/login-logout-button.component';
import { SideMainLayoutComponent } from './components/layouts/side-main-layout/side-main-layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ItemComponent } from './components/item/item.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { SideMainSideLayoutComponent } from './components/layouts/side-main-side-layout/side-main-side-layout.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardsGridComponent } from './components/cards-grid/cards-grid.component';
import { CardWithImageComponent } from './components/card-with-image/card-with-image.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SidenavLinksComponent } from './components/layouts/sidenav-links/sidenav-links.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { MiscComponent } from './components/misc/misc.component';

// End of Material Modules

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    GridLayoutComponent,
    NavbarComponent,
    FooterComponent,
    LoginLogoutButtonComponent,
    SideMainLayoutComponent,
    PageNotFoundComponent,
    ItemComponent,
    GenericFormComponent,
    SideMainSideLayoutComponent,
    FiltersComponent,
    CardsGridComponent,
    CardWithImageComponent,
    TruncatePipe,
    SidenavLinksComponent,
    CarouselComponent,
    ModalDialogComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Materials
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    // End of Materials
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [ModalDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
