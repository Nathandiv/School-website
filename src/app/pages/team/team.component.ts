import { Component } from '@angular/core';
import { NavbarComponent } from '../../UI/Shared-UI/navbar/navbar.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
