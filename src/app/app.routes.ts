import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { ArchiversComponent } from './pages/archivers/archivers.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    
    {
        path: "",
        title: "home",
        component: HomeComponent,

    },


    {
        path:"contact",
        title: "contact",
        component: ContactComponent,

    },
    {
        path: "about",
        title:"about",
        component: AboutComponent,
    },

    {
        path: "archivers",
        title:"archivers",
        component: ArchiversComponent,
    },

    {
        path: "activities",
        title:"activities",
        component: ActivitiesComponent,
    },

    {
        path: "Apply",
        title:"Apply",
        component: ApplyComponent,
    },



    {
        path:"**",
        title: "error",
        component: ErrorComponent,
     },


];
