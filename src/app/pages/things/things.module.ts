import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './things-routing.module';
import { EntityListComponent } from './entity-list/entity-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { EntityShowMoreComponent } from './entity-show-more/entity-show-more.component';

import { FormsModule }   from '@angular/forms';
import { EntityRawEditorComponent } from './entity-raw-editor/entity-raw-editor.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FusionChartsModule } from 'angular-fusioncharts';


@NgModule({
  declarations: [EntityListComponent, EntityShowMoreComponent, EntityRawEditorComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule ,
    EntitiesRoutingModule,
    NgApexchartsModule,
    FusionChartsModule
  ],
  providers : [
  ]
})
export class EntitiesModule { }
