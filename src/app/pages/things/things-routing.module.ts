import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityShowMoreComponent } from './entity-show-more/entity-show-more.component';
import { EntityRawEditorComponent } from './entity-raw-editor/entity-raw-editor.component';

const routes: Routes = [
  { path: '', component: EntityListComponent },
  { path: 'new', component: EntityShowMoreComponent },
  { path: 'show-more/:id', component: EntityShowMoreComponent },
  { path: 'raw-editor/:id', component: EntityRawEditorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule { }
