import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologieAdministrationComponent } from './technologie-administration/technologie-administration.component';
import { TechnologieDetailComponent } from './technologie-detail/technologie-detail.component';
import { TechnologieViewerComponent } from './technologie-viewer/technologie-viewer.component';

const routes: Routes = [
    { path: 'administration', component: TechnologieAdministrationComponent },
    { path: 'administration/:id', component: TechnologieDetailComponent },
    { path: 'viewer', component: TechnologieViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
