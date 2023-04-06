export class Ingredient {
  constructor(public name: string, public amount: number) {
    (name = this.name), (amount = this.amount);
  }
}
