import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { OrderModule } from 'ngx-order-pipe';

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { GridFilterPipe } from './pipes/grid-filter.pipe';


@NgModule({

  declarations: [
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    InlineEditComponent,
    GridFilterPipe
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSpinnerModule,
    NgxPageScrollModule,
    OrderModule
  ],

  exports: [
    // shared modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSpinnerModule,
    NgxPageScrollModule,
    OrderModule,

    // shared components
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    InlineEditComponent,


    GridFilterPipe
  ]
})
export class SharedModule { }
