import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        StatusBarComponent,
        PeopleListComponent,
        PeopleDetailComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
