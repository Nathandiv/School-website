import { Component } from '@angular/core';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { NavbarComponent } from '../../UI/Shared-UI/navbar/navbar.component';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {

}
