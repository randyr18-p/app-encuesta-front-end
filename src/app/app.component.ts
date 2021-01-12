import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService],
})
export class AppComponent implements OnInit{
  public title = 'Encuesta';
  public user: User;
  public identity;
  public toquen;

  constructor(
    // tslint:disable-next-line: variable-name
    private _userService: UserService){
  this.user = new User('', '', '', '', '', '', true, );
  }
  // tslint:disable-next-line: typedef
  ngOnInit(){
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
  public onSubmit(){
    console.log(this.user);
  }


}


