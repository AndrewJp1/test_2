import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup; // FORMULARIO DE LOGIN
  // password: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      email: [null, Validators.compose([
        Validators.email,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
        Validators.required])],
      password: [null, Validators.compose([
        Validators.minLength(6),
        Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  /**
    * @description  HACER LOGIN
    *
  */
  submitForm() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (this.form.valid) {
      if (this.form.value.password === '123456') {
        console.log(this.form.value);
        this.router.navigateByUrl("/directory_empleado");
        this.form.reset();
      }else{
        this.form.reset();
        alert('Usuario ó Contraseña Incorrectas');
      }
    }
  }

}
