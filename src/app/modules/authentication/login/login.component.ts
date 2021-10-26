import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
    constructor(
        private fb: FormBuilder,
        private router: Router)
    {
    }

    loginForm: FormGroup;

    ngOnInit(){
        this.loginForm = this.fb.group({
            email     : [ null, [ Validators.required, Validators.email ] ],
            password  : [ null, [ Validators.required ] ],
            rememberMe: [ false ]
          });
    }

    onSubmit(form){
        if(form.valid){

        }
    }
}