import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Navigation } from '../../models/navigation';
import { AuthService } from '../../global/services/auth.service';

@Component({
  selector: 'header-navigation',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header-navigation.component.scss'],
  templateUrl: './header-navigation.component.html'
})
export class HeaderNavigationComponent {
  @Output() public toggleSidenav = new EventEmitter<boolean>();
  public collapsed: boolean = true;
  public demoMode: boolean = false;

  public navigations: Navigation[] = [
    { url: 'stix/attack-patterns', label: 'Attack Patterns' },
    { url: 'stix/campaigns', label: 'Campaigns' },
    { url: 'stix/course-of-actions', label: 'Courses of Action' },
    { url: 'stix/indicators', label: 'Indicators' },
    { url: 'stix/identities', label: 'Identities' },
    { url: 'stix/malwares', label: 'Malware' },
    // {url: 'stix/relationships', label: 'Relationships'},
    { url: 'stix/sightings', label: 'Sightings' },
    { url: 'stix/tools', label: 'Tools' },
    { url: 'stix/threat-actors', label: 'Threat Actors' },
    { url: 'stix/intrusion-sets', label: 'Intrusion Sets' },
    { url: 'stix/reports', label: 'Reports' },
    { url: 'stix/x-unfetter-sensors', label: 'Sensors' }
  ];

  constructor(public authService: AuthService) { }

  public menuClicked() {
    this.toggleSidenav.emit();
  }  
}
