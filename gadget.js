// 3. Создание структуры и реализация наследуемости классов

class Gajet {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  showPrice() {
    console.log(`Этот гаджет бренда ${this.brand} стоит ${this.price} рублей.`);
  }
}

class Smartphone extends Gajet {
  constructor(brand, price, os) {
    super(brand, price)
    this.os = os;
  }
  makeCall() {
    console.log(`Звоню со смартфона бренда ${this.brand}, c ОС ${this.os}, который стоит ${this.price}.`)
  }
}

const bandFitness = new Gajet('Xiaomi', 1000)
bandFitness.showPrice()

const samsung = new Smartphone('Samsung', 15000, 'Android')
samsung.showPrice()
samsung.makeCall()