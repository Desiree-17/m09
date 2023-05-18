
let myPokemon = {

  tackle: function (){
    console.log("This Pokemon tacked targetPokemon");
    console.log("targetPokemon's health is now reduced to _targetPokemonHealth_");
},
}



// Trainer object using object literals
const trainer = {
  name: "Desiree",
  age: 19,
  pokemon: [],
  talk: function() {
    console.log("Desiree: Pikachu! I choose you!");
  console.log(myPokemon)
}
};



// Accessing trainer object properties using dot and square bracket notation
console.log(trainer.name);
console.log(trainer["age"]);

// Invoking the trainer talk method
trainer.talk();

// Constructor for creating Pokemon objects
function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = level * 10;
  this.attack = level * 5;
}

// Instantiate several Pokemon objects
const Pikachu = new Pokemon("Pikachu", 10);
const Charmander = new Pokemon("Charmander", 5);
const Squirtle = new Pokemon("Squirtle", 8);

// Tackle method for Pokemon
Pokemon.prototype.tackle = function(target) {
  target.health -= this.attack;

  if (target.health <= 0) {
    this.faint(target);
  }
};

function Pokemon (name, level, health){
  //properties
  this.name = name;
  this.level = level;
  this.health = health;
  this.health = 2 * health;
  this.attack = level;

  //methods
  this.tackle = function(target)
  {
    console.log(this.name + ' tackled ' + target.name);
    console.log("Charmander's health is now reduced")
    console.log("-------------------------------------")
    console.log(target.name + ' tackled ' + this.name);
    console.log( "Pikachu's s is now reduced")
    console.log(this.name + ' tackled ' + target.name);
    console.log("Charmander's fainted")  

  };
}


// Invoking the tackle method
Pikachu.tackle(Charmander);

// Outputting the health of the target Pokemon after tackle
console.log(Charmander.health);

