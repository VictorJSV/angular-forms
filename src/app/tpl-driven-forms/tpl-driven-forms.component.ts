import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tpl-driven-forms',
  templateUrl: './tpl-driven-forms.component.html',
  styleUrls: ['./tpl-driven-forms.component.css']
})
export class TplDrivenFormsComponent implements OnInit {

  occupations: Array<string>;
  myForm: any;

  constructor() {
    this.occupations = ['backEnd', 'frontEnd', 'mobile'];
  }

  buildForm() {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'occupation': new FormControl('', [Validators.required]),
      'skill': new FormControl('')
    });
  }

  saveForm() {
    const formModel = this.myForm.value;
    console.log(formModel)
  }

  ngOnInit() {
    this.buildForm();
  }

}
