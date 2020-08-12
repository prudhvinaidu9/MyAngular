import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PasswordChecker} from "./custom-validators/password-checker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';

  registerForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder){ }

  ngOnInit(){
    this.registerForm= this.formbuilder.group({
      firstName : ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["",[Validators.required, Validators.email]],
      password: ["", [Validators.required,Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
      acceptTandC: [false, Validators.requiredTrue],
    },{
      validators: PasswordChecker('password','confirmPassword'),
    });
  }

  get h(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted= true;
    if(this.registerForm.invalid){
      return;
    }
    console.table(this.registerForm.value);
    console.table(this.registerForm);
    alert("Success SignUp\n"+ JSON.stringify(this.registerForm.value));
  }

  onReset(){
    this.submitted= false;
    this.registerForm.reset();
  }
}