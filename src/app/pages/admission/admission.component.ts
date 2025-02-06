import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { NavbarComponent } from '../../UI/Shared-UI/navbar/navbar.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule], // Add CommonModule here
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements AfterViewInit {

  activeTab: string = 'profile'; // Default active tab

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Initialize Flowbite after the view has initialized
    initFlowbite();
  }

  // Function to set the active tab
  selectTab(tab: string): void {
    console.log(`Tab selected: ${tab}`);
    this.activeTab = tab;
    console.log(`Current active tab: ${this.activeTab}`);
    this.cdRef.detectChanges();  // Trigger change detection manually
  }

  // Function to determine if a tab is active
  isActiveTab(tab: string): string {
    if (this.activeTab === tab) {
      return 'border-blue-500 text-blue-600 dark:border-blue-500 dark:text-blue-500';
    }
    return 'border-transparent text-gray-500 dark:text-gray-400';
  }

}
