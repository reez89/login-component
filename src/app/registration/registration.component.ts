import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputField } from '../models/input-field';

@Component( {
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.css' ],
} )
export class RegistrationComponent {

  inputs: InputField[] = [
    {
      value: 'name',
      type: 'text',
      placeholder: 'Enter your name',
      fcName: 'name',
    },
    {
      value: 'surname',
      type: 'text',
      placeholder: 'Enter your surname',
      fcName: 'surname',
    },
    {
      value: 'email',
      type: 'email',
      placeholder: 'Enter your email address',
      fcName: 'email',
    },
    {
      value: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      fcName: 'password',
    },
    {
      value: 'confirmPassword',
      type: 'password',
      placeholder: 'Be sure about the password match',
      fcName: 'confirmPassword',
    },
    {
      value: 'checkbox',
      type: 'checkbox',
      placeholder: 'Remember me',
      fcName: 'rememberMe',
    },
  ];

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group( {
      email: [ '', Validators.required ],
      name: [ '', Validators.required ],
      surname: [ '', Validators.required ],
      password: [ '', Validators.required ],
      confirmPassword: [ '', Validators.required ],
      rememberMe: [ false ]
    } );
  }

  save() {
    //add your action here
    const password = this.form.get( 'password' )?.value;
    const confirmedPassword = this.form.get( 'confirmPassword' )?.value;
    //password validation
    if ( confirmedPassword === password ) {
      console.log( this.form.value );
    }
    return;
  }

}
