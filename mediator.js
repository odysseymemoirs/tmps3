// медиатор нужен для того чтобы уменьшить связанность классов между собой
// и который устанавливает все возможные связи внутри себя
// благодоря этому переиспользуемость классов увеличивается в разы

class ComputerSeller {
  constructor() {
    this.customers = [];
  }
  
  orderLaptop(customer, laptop, info) {
    const name = customer.getName();
    console.log(`Покупатель : ${name}. Заказ: ${laptop}`);
    console.log(`Дополнительная информация: ${info}`);
    this.addToCustomersList(name);
  }
  
  addToCustomersList(name) {
    this.customers.push(name);
  }
  
  getCustomerList() {
    return this.customers;
  }
};

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }
     
  getName() {
    return this.name;
  }
     
  makeOrder(laptop, info) {
    this.dealerMediator.orderLaptop(this, laptop, info)
  }
};

let mediator = new ComputerSeller();

let client = new Customer('Andrei',mediator)
let client2 = new Customer('Alex',mediator)

client.makeOrder('Asus','1Tb memorty');
client2.makeOrder('Dell','32Gb Ram')


/*

Покупатель : Andrei. Заказ: Asus
Дополнительная информация: 1Tb memorty
Покупатель : Alex. Заказ: Dell
Дополнительная информация: 32Gb Ram

*/