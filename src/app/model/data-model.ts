export class Developer {
  name = 0;
  occupation = '';
  ubigeo: Ubigeo[];
  skills: Array<Skills[]>;
}

export class Ubigeo {
  country = 'Peru';
  postalCode = '055';
}

export class Skills {
  title = '';
  description = '';
}