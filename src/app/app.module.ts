import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologieAdministrationModule } from './technologie-administration/technologie-administration.module';
import { TechnologieDetailModule } from './technologie-detail/technologie-detail.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TechnologieViewerModule } from './technologie-viewer/technologie-viewer.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        TechnologieAdministrationModule,
        TechnologieDetailModule,
        TechnologieViewerModule
        /*
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false
        })
        */
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
