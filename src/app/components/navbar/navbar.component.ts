import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material';
import { AuthService } from '../../core/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(public auth: AuthService) { }
}