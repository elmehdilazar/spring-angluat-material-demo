import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {
constructor(public auth:AuthenticationService) {
}

  logout() {
    this.auth.logout();
  }
}
