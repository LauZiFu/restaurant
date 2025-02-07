class MenuItem {
  #myPrice

  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  set price(dollars){
    if(!dollars instanceof Number){
      throw new Error("Must be a number!");
    }
    this.#myPrice = dollars.toFixed(2);
  }

  get price(){
    return Number(this.#myPrice);
  }

  getStringPrice(){
    return this.#myPrice;
  }

  getDetails() {
    return {
      name: this.name,
      price: this.price,
      description: this.description
    };
  }
}

export default MenuItem;
