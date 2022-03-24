import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputField } from 'src/app/models/input-field';

@Component( {
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: [ './custom-input.component.css' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => CustomInputComponent ),
      multi: true
    }
  ]
} )
export class CustomInputComponent implements ControlValueAccessor {

  @Input()
  inputs: InputField[] = [];

  @Input()
  id!: string;

  @Input()
  name!: string;

  private _type!: string;
  private _placeholder!: string;
  private _val!: string;
  private _formControlName!: string;

  public get formControlName(): string {
    return this._formControlName;
  }

  public get placeholder(): string {
    return this._placeholder;
  }

  public get val() {
    return this._val;
  }

  public get type(): string {
    return this._type;
  }

  @Input()
  public set type( value: string ) {
    this._type = value;
  }

  @Input()
  public set placeholder( value: string ) {
    value !== undefined ? this._placeholder = value : '';
  }

  @Input()
  public set formControlName( value: string ) {
    this._formControlName = value;
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  public set val( value ) {
    this._val = value;
    this.onTouched();
    this.onChanged( value );
  }

  writeValue( obj: any ): void {
    this.val = obj;
  }
  registerOnChange( fn: any ): void {
    this.onChanged = fn;
  }
  registerOnTouched( fn: any ): void {
    this.onTouched = fn;
  }

}
