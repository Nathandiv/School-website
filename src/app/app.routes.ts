import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { ArchiversComponent } from './pages/archivers/archivers.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { ErrorComponent } from './pages/error/error.component';
import { TeamComponent } from './pages/team/team.component';
import { GovernComponent } from './pages/govern/govern.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';

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

    { path: 'about/team', component: TeamComponent },
    { path: 'about/govern', component: GovernComponent },
    { path: 'about/vacancies', component: VacanciesComponent},

    {
        path: "archivers",
        title:"archivers",
        component: ArchiversComponent,
    },

    {
        path: "Admission",
        title:"Admission",
        component: AdmissionComponent,
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
