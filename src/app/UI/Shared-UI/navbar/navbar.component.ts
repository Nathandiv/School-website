import { Component, HostListener } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  // isDropdownVisible = false; // "About Us" dropdown visibility
  // isAdmissionDropdownVisible = false; // "Admission" dropdown visibility

  // // Show "About us" dropdown
  // showDropdown() {
  //   this.isAdmissionDropdownVisible = false; // Close "Admission" dropdown if open
  //   this.isDropdownVisible = true;
  // }

  // // Hide "About us" dropdown
  // hideDropdown() {
  //   this.isDropdownVisible = false;
  // }

  // // Show "Admission" dropdown
  // showAdmissionDropdown() {
  //   this.isDropdownVisible = false; // Close "About us" dropdown if open
  //   this.isAdmissionDropdownVisible = true;
  // }

  // // Hide "Admission" dropdown
  // hideAdmissionDropdown() {
  //   this.isAdmissionDropdownVisible = false;
  // }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   const targetElement = event.target as HTMLElement;

  //   // Close dropdowns if clicked outside
  //   if (!targetElement.closest('.about-dropdown') && !targetElement.closest('.admission-dropdown')) {
  //     this.isDropdownVisible = false;
  //     this.isAdmissionDropdownVisible = false;
  //   }
  // }

}
