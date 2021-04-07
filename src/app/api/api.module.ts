import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { HealthComponent } from './health/health.component';


@NgModule({
  declarations: [HealthComponent],
  imports: [
    CommonModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }
