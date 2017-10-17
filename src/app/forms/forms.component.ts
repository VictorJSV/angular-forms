import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  message: string;
  message2: string;
  perros: Array<string>;

  constructor() {
    this.perros = ['fifi', 'rex', 'timon', 'pedro']
  }

  onClickMe() {
    this.message = 'Hola mundo';
  }

  onKey(event): void {
    this.message2 = event.target.value;
  }

  addDog(event, element): void {
    const value: any = event.target.value;
    if (value) {
      this.perros.push(event.target.value)
    }
    element.value = '';
  }

  ngOnInit() {
  }

}
