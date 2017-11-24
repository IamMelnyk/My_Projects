import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor( private router:Router) { } form;

  ngOnInit() {console.log('hit');}
  MyFunction(){
    let testt = confirm(" London is the capital of Great Britain?");
    
    alert( testt );  
}


Registr(e) {
  e.preventDefault();
  console.log(e);
  var username = e.target.elements[0].value;
  var password = e.target.elements[1].value;
 
  
  if(username == 'root' && password == 'root') {
   alert('You are on system');
  }
  else{
    alert('Sorry, wrong username or password');
  }
 } 

}