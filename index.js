// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.numberOfCups = 0;
    this.insertedCoins = 0;
    // these two properties in gram
    this.amountOfCoffee = 0;
    this.coffeePerCup = 13;
  }

  // maintenance

  plugIn() {
    this.pluggedIn = true;
  }

  connectToWater() {
    this.connectedToWater = true;
  }

  fillWithCoffee(amount) {
    // add amount to total amount of
    // ground coffee in the machine
    this.amountOfCoffee += amount;
    }

  fillWithCups(amount) {
    // add amount of cups to the
    // total number of cups in the machine
      this.numberOfCups += amount;
  }

  // user choices

  insertMoney(inserted) {
      this.insertedMoney = true;
  }

  pressStartButton() {
    // her we will need to call
    // a number of internal methods
    // (see below)
    // in the correct order
    // and abort if not enough coffee etc

    // FOR NOW
  }

  // internals

  brewCoffee() {
    // one cup at a time
    // heat water... etc
  }

  dispenseCup() {

  }

  dispenseCoffee() {

  }
  checkIfEnoughCoffeeForACup() {
    return this.amountOfCoffee >= this.coffeePerCup;
    }
}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;