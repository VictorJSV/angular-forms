export class Employee {
  constructor(
    public id: number,
    public name: string,
    public occupation: string,
    public skill?: string // Esto indica que es opcional
  ) { }
}
