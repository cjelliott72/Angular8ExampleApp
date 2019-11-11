import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    { path: 'people-list', component: PeopleListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'people-detail/:id', component: PeopleDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
