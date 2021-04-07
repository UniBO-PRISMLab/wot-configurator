import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


const routes: Routes = [

  {path: '', redirectTo: '/things',  pathMatch: 'full' },
  {path: 'home', redirectTo: '/things',  pathMatch: 'full' },
  {path: 'things' , loadChildren: () => import('./pages/things/things.module').then(m => m.EntitiesModule) },
  {path : 'api', loadChildren: () => import('./api/api.module').then(m => m.ApiModule) },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
