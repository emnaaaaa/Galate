import { Component, OnInit} from '@angular/core';
import { FormsModule, AbstractControl, FormBuilder,  FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from './Login';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public pseudo: AbstractControl;
    public password: AbstractControl;
    public bool=false;

    login: Login = new Login();
    submitted = false;
  constructor(private router: Router, fb: FormBuilder, private loginService: LoginService) {
  
  
    this.form = fb.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required]
  });

  this.pseudo = this.form.controls['pseudo'];
  this.password = this.form.controls['password'];
  }

  ngOnInit() {
  }

  signIn() {
    this.loginService.login(this.login)
        .subscribe(data =>{
          var status=JSON.parse(JSON.stringify(data)).status;
          console.log('status='+JSON.parse(JSON.stringify(data)).status);
          if(status===200){
            this.router.navigate(['/test']);
          }
        } , error => console.log('err'+error));
    this.login = new Login();
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.signIn();
    }
  }


}