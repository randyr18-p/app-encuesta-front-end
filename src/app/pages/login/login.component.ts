import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '', '', '', '', '', true, );
  // tslint:disable-next-line: variable-name

  // tslint:disable-next-line: variable-name
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    const texto = this._userService.signup(this.user).subscribe(response => {
      console.log(response);
  },
  error => {
     const errorMessage = error as any;
     if (error != null){
       console.log(error);

     }
  }
  );
  }
    // tslint:disable-next-line: typedef
    login( form: NgForm ) {
      if (form.invalid){
        return;
      }
      console.log(this.user);
      console.log(form);
    }
}
