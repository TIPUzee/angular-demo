import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service'

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent {

  constructor(protected usersData: UsersDataService) {}
}
