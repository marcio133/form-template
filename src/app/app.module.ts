import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';


const appRoutes: Routes = [
  
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InitialScreenComponent,
    SuccessModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
      NgbModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SuccessModalComponent
  ]
})
export class AppModule { }
