import { Component } from '@angular/core';
import { NavbarComponent } from '../../UI/Shared-UI/navbar/navbar.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';

@Component({
  selector: 'app-govern',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './govern.component.html',
  styleUrl: './govern.component.css'
})
export class GovernComponent {

}
