// 4. Реализация класса Cafe

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return (`Кафе: ${this.name}, находится по адресу: ${this.location}.`);
  }

  orderDrink(drink) {
    drink.serveDrink();
    console.log(`В кафе ${this.name} заказан напиток ${drink.name}!`);
  }
}

export {Cafe};