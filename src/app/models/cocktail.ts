export class Cocktail {
  name?: string;
  price?: number;
  img?: string;

  constructor(input?: Cocktail) {
    Object.assign(this, input);
  }
}
