// 3. Реализация абстрактного класса Drink и его наследников

class Drink {
  #temperature = 20;

  constructor(name, size, price) {
    if (new.target === Drink) {
      throw new Error('нельзя создавать экземпляры абстрактного класса напрямую!');
    }

    this.name = name;
    this.size = size;
    this.price = price;
  }

  getInfo() {
    return (`Напиток: ${this.name}, объем: ${this.size}, цена: ${this.price}.`);
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemp) {
    this.#temperature = newTemp;
  }

  #prepareDrink() {
    console.log(`Приготовление напитка ${this.name}.`);
  }

  serveDrink() {
    this.#prepareDrink();
    this.setTemperature(50);
    console.log(`Напиток ${this.name} подан с температурой ${this.#temperature}°C.`);
  }
}

class Lemonade extends Drink {
  constructor (name, size, price, flavor) {
    super(name, size, price);
    this.flavor = flavor;
  }
}

class Tea extends Drink {
  constructor (name, size, price, teaType, strength) {
    super(name, size, price);
    this.teaType = teaType;
    this.strength = strength;
  }
}

class Coffee extends Drink {
  constructor (name, size, price, milkType, beanVariety) {
    super(name, size, price);
    this.milkType = milkType;
    this.beanVariety = beanVariety;
  }
}

class Milkshake extends Drink {
  constructor (name, size, price, topping) {
    super(name, size, price);
    this.topping = topping;
  }
}

export {Drink, Lemonade, Tea, Coffee, Milkshake};