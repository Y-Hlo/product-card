// 4.2. Реализация

import {Cafe} from './Cafe.js'
import {Lemonade, Tea, Coffee, Milkshake} from './Drinks.js'

const myCafe = new Cafe('Маслина', 'ул. Трампова');
const chifir = new Tea('чай', 'армуд', 25, 'черный', 'чифирь');

console.log(myCafe.getCafeInfo());
console.log(chifir.getInfo());
myCafe.orderDrink(chifir);