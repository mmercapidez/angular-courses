import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dumm-data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  public get imagePath() {
    return '../../assets/users/' + this.selectedUser.avatar;
  }
}
