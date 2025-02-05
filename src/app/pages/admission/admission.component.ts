import { Component } from '@angular/core';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { NavbarComponent } from '../../UI/Shared-UI/navbar/navbar.component';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent {

}
