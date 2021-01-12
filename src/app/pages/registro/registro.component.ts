import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
   this.user = new User('', '', '', '', '', '', true, );

  }
    // tslint:disable-next-line: typedef
    onSubmit(form: NgForm){

       if (form.invalid) {return; }

       console.log('formulario enviado');
       console.log(this.user);
       console.log(form);
    }

}
