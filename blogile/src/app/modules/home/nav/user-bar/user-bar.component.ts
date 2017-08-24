import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../services/auth/auth.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
