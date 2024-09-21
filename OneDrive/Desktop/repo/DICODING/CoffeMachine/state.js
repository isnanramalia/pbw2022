const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

// ---ini utk export seluruh file state.js kedalam index.js
// module.exports = coffeeStock;
// console.log(module);

// ---ini utk export beberapa nilai sj
const isCoffeeMachineReady = true;
module.exports = coffeeStock;
module.exports = isCoffeeMachineReady; // menginisialisasi ulang properti module.exports sehingga nilai yg di export hny variable isCoffeeMachineReady
module.exports = {coffeeStock, isCoffeeMachineReady}; 
