import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologieAdministrationModule } from './technologie-administration/technologie-administration.module';
import { TechnologieDetailModule } from './technologie-detail/technologie-detail.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TechnologieAdministrationModule,
        TechnologieDetailModule
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
