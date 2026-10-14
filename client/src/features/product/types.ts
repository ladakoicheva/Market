export enum CATEGORIES  {
  ELECTRONICS = "ELECTRONICS",
  CLOUTHING = ' CLOUTHING',
  FOOD ="FOOD",

}

export interface productI {
  name: string,
  category:  CATEGORIES | undefined,
  price: number,
  id: string,
  owner: string;
  inStock:boolean
}

export interface stateI {
  products: productI[];
}