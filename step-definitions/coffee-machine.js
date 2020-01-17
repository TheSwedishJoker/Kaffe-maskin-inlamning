/// Import our program
// (in this case an instance of a coffee machine
// so that we can run unit tests methods)
let CoffeeMachine = require('../index.js');
let myMachine = new CoffeeMachine();

// Export the step-definitions
// (tests) so that Cucumber can
// read/use them
module.exports = function () {

  this.Given(/^that the machine is plugged in$/, function () {
    // tell the machine that it is plugged in
    myMachine.plugIn();
    // check if the property pluggedIn is true
    // this also works: assert(myMachine.pluggedIn)
    // but this is clearer
    assert.strictEqual(
      myMachine.pluggedIn,
      true,
      'Expected the property pluggedIn to be true after calling the plugIn() method.'
    );
  });

  this.Given(/^that water is available$/, function () {
    // tell the machine to connect to water
    myMachine.connectToWater();
    // check if the property connectedToWater is true
    assert.strictEqual(
      myMachine.connectedToWater,
      true,
      'Expected the property connectedToWater to be true after calling the connectToWater() method.'
    );
  });

  this.Then(/^that the machine has enough ground coffee$/, function () {
    // newly unpacked machine
    // so expect it to have no coffee
    // and the result to be false
    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      false,
      'Expected a new machine to not have enough coffee'
    );
    // Now add some ground coffee to the machine
    my.Machine.fillWithCoffee(100);
    // Then check again expect result to be true
    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      true,
      'Expected to have enough coffee for a cup (after filling it with 100 grams of ground coffee'
    );
  });
    

  this.Given(/^that the machine has enough plastic cups$/, function () {
    // newly unpacked machine
    // so expect it to have no coffee
    // and the result to be false
    assert.deepEqual(
      myMachine.checkIfAnyCupsLeft(),
      false,
      'Expected a new machine to not have enough coffee'
    );
    // Now add some ground coffee to the machine
    myMachine.fillWithCups(2);
    // Then check again expect result to be true
    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      true,
      'Expected the machine to have at least one cup after filling with two cups'
    );
  });

  this.When(/^the user inserts a (\d+) kr coin$/, function (amountOfCoins) {
    // Stupid cucumber- sends the coins
    // as a string to our test function
    // so convert it to a number (by dividing with 1)
    amountOfCoins /= 1;

    let coinsBefore = myMachine.insertedCoins;
    myMachine.insertCoin(amountOfCoins);
    assert.deepEqual(
      myMachine.insertedCoins,
      coinsBefore + amountOfCoins,
      "Expected the amount of coins inserted to increase with the amount inserted"
    );
  });
}