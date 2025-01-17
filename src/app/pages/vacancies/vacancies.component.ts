import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/Shared-UI/navbar/navbar.component";
import { FooterComponent } from "../../UI/Shared-UI/footer/footer.component";

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent {

}
