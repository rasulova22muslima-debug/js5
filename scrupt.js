let users = {};
for (let i = 1; i <= 10; i++) {
  let name = prompt(`Введите имя пользователя ${i}:`);
  let age = prompt(`Введите возраст пользователя ${i}:`);
  users[i] = {
    name: name,
    age: age
  };
}
for (let i = 1; i <= 10; i++) {
  console.log(`Пользователь - ${i}`);
  console.log(`Имя - ${users[i].name}`);
  console.log(`Возраст - ${users[i].age}`);
}
console.log("Общий объект:", users);


const cart = cartObj();

console.log(cart);

let delivery = 9000;
let messege = "Вы заказали" ;

for (const key in cart) {
  messege += "" + key;
  console.log(messege);
  for (const key2 in cart[key]) {
    if (key2 == "info") {
      messege += " " + cart[key][key2];
      console.log(messege);
    } else if (key2 == "price") {
      delivery += cart[key][key2];
      console.log(delivery)
    }
  }
}
console.log(`${messege} | общая стоимость ${delivery} сум с доставкой (9000) `)