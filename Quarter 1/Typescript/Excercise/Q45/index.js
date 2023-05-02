"use strict";
function define_car(manufacturer, model_name, ...key_value_pairs) {
    const car = { manufacturer, model_name };
    key_value_pairs.forEach((value, index) => {
        if (index % 2 == 0) {
            car[value] = key_value_pairs[index + 1];
        }
    });
    return car;
}
const car1 = define_car("Toyota", "Yaris", "Color", "Black", "Engine", "1300cc", "Drive", "Automatic");
const car2 = define_car("Suzuki", "Mehran", "Color", "White");
const car3 = define_car("Kia", "Sportage", "Color", "Fery Red", "Engine", "2000cc", "Drive", "AWD", "Engine_power", "155HP", "Gear", "6 Speed");
console.log(car1);
console.log(car2);
console.log(car3);
