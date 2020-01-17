 Feature: 
 As a coffee buyer 
 I want a basic machine that 
 I can put 10 kr coin in
 And get a black cup of coffee back.
  
Scenario: 
 Given that the machine is plugged in
 And that water is available 
 And that the machine has ground coffee
 And the machine has plastic cups
 When the user inserts a 10 kr coin
 And presses the start button
 Then the user receives a cup of coffee.