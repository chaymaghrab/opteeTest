import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'error/:errorCode', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
