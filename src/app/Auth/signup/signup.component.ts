import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  hasError: boolean = false;
  errMsg = "";

  async onSubmit(user: User) {
    if (
      user.firstName == "" ||
      user.lastName == "" ||
      user.email == "" ||
      user.phone == "" ||
      user.country == "" ||
      user.street == "" ||
      user.twon == ""
    ) {
      this.hasError = !this.hasError;
      this.errMsg = "Vueillez remplir tous les champs";
      console.error(this.errMsg);
    } else {
      console.table(user);
    }
  }

}
