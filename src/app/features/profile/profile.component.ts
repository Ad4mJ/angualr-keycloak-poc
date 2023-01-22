import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = '';

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }
}
