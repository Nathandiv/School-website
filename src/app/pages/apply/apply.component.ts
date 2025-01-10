import { Component } from '@angular/core';
import { NavbarComponent } from '../../UI/Shared-UI/navbar/navbar.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.css'
})
export class ApplyComponent {

}
