import { Component, Directive } from '@angular/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from '@angular/common'
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import 'rxjs/Rx';
import {ROUTER_DIRECTIVES,  Router} from '@angular/router';

@Component({ 
  selector: 'RegisterPage', 
  templateUrl: 'app/register/register.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class RegisterComponent { 

  registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  
  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.registerForm = builder.group({
     username: ["", Validators.none],
     password: ["", Validators.none],
     firstName: ["", Validators.none],
     lastName: ["", Validators.none],
   });
   
   if(localStorage.getItem('token') != null){
		 this.router.navigate(['./']);
   }
   
  }
  onRegister(): void {
	var data = "username="+this.registerForm.value.username+"&password="+this.registerForm.value.password+"&firstName="+this.registerForm.value.firstName+"&lastName="+this.registerForm.value.lastName;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/php/registerservice.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => {
		var obj = JSON.parse(err._body);
		document.getElementsByClassName("alert")[0].style.display = "block";
		document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
	},
	() => { 
		var obj = JSON.parse(this.postResponse._body);
		localStorage.setItem('token', obj.token);
	    this.router.navigate(['./']);
	 }
	);
	
  }
}
