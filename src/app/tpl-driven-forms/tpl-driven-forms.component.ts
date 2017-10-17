import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, FormBuilder, FormArray} from '@angular/forms';
import {forbiddenNameValidator} from '../directives/forbidden-name.directive';

@Component({
  selector: 'app-tpl-driven-forms',
  templateUrl: './tpl-driven-forms.component.html',
  styleUrls: ['./tpl-driven-forms.component.css']
})
export class TplDrivenFormsComponent implements OnInit {

  occupations: Array<string>;
  myForm: FormGroup;
  myFormValues: { [name: string]: AbstractControl };

  constructor(private fb: FormBuilder) {
    this.occupations = ['backEnd', 'frontEnd', 'mobile'];
  }

  buildForm() {
    this.myForm = this.fb.group({
      'name': new FormControl('', [
        Validators.required,
        forbiddenNameValidator(/bicho/i)
      ]),
      'occupation': new FormControl('', [Validators.required]),
      'ubigeo': new FormGroup({
        'country': new FormControl(''),
        'postalCode': new FormControl('')
      }),
      'skills': new FormArray([
        new FormGroup({
          'title': new FormControl(''),
          'description': new FormControl('')
        }),
        new FormGroup({
          'title': new FormControl(''),
          'description': new FormControl('')
        })
      ])
    });

    this.myFormValues = {
      'name': this.myForm.get('name'),
      'ubigeoCountry': this.myForm.get('ubigeo').get('country'),
      'skills': this.myForm.get('skills')
    };

    console.log(this.myForm.get('skills').get([0]).get('description'))
    console.log(this.myForm.get('name'))
  }

  saveForm() {
    const formModel = this.myForm.value;
    console.log(formModel)
  }

  ngOnInit() {
    this.buildForm();
  }

}
