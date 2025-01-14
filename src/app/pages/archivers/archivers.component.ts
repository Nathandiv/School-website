import { Component } from '@angular/core';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { NavbarComponent } from '../../UI/Shared-UI/navbar/navbar.component';

@Component({
  selector: 'app-archivers',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './archivers.component.html',
  styleUrl: './archivers.component.css'
})
export class ArchiversComponent {

}
