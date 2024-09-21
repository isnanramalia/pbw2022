// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// ---ini import semua file state.js
// const coffeeStock = require('./state');
// console.log(coffeeStock);
// const makeCoffee = (type, miligrams) => {
//     if(coffeeStock[type] >= miligrams){
//         console.log("Kopi berhasil dibuat!");
//     }else{
//         console.log("Biji kopi habis!");
//     }
// }
// makeCoffee("robusta", 0);

const {coffeeStock, isCoffeeMachineReady} = require('./state');
console.log(coffeeStock);
console.log(isCoffeeMachineReady);