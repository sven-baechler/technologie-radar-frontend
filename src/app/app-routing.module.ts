import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologieAdministrationComponent } from './technologie-administration/technologie-administration.component';
import { TechnologieDetailComponent } from './technologie-detail/technologie-detail.component';

const routes: Routes = [
    { path: 'administration', component: TechnologieAdministrationComponent },
    { path: 'administration/:id', component: TechnologieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
