import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dumm-data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  //computed properties with signals (this is becouse angular recompute the property)
  imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar);

  // public get imagePath() {
  //   return '../../assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    console.log('clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
