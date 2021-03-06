import { NgModule } from '@angular/core';

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrettyjsonPipe } from './prettyjson.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PrettyjsonPipe
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
