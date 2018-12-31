import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MenuModule } from '@progress/kendo-angular-menu';
import { MyTransferlistComponent } from './transferlists/my-transferlist.component';
import { FilteredTransferlistComponent } from './transferlists/filtered-transferlist.component';

const routes = [
  { path: 'mytransferlist', component: MyTransferlistComponent },
  { path: 'filteredtransferlist', component: FilteredTransferlistComponent },
  { path: '', redirectTo: 'mytransferlist', pathMatch: 'full'},
  { path: '**', redirectTo: 'mytransferlist', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MyTransferlistComponent,
    FilteredTransferlistComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    LayoutModule,
    RippleModule,
    InputsModule,
    PopupModule,
    MenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
