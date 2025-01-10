import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ApplyComponent } from './pages/apply/apply.component';

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
        path: "about",
        title:"about",
        component: ApplyComponent,
    },


    // {
    //     path:"**",
    //     title: "error",
    //     component: ErrorComponent,
    //  },


];
