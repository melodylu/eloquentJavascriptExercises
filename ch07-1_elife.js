// Pooping plant eaters, 7.1
// http://eloquentjavascript.net/07_elife.html 

// Your code here
function SmartPlantEater() {
  this.energy = 20;
  this.parent = 5;
  this.dir = "s";
}
SmartPlantEater.prototype.act = function(context) {
  var space = context.find(" ");
  if (this.energy > 60 && space && this.parent <= 0 ){
    this.parent = 15;
    return {type: "reproduce", direction: space};
  }
  var plant = context.find("*");
  if(plant && this.energy < 80 ){
     this.parent -= .5;
    return {type: "eat", direction: plant};
  }
  // smarter move algorithm below
    var start = this.dir;
  if (context.look(dirPlus(this.dir, -3)) != " ")
    start = this.dir = dirPlus(this.dir, -2);
  while (context.look(this.dir) != " ") {
    this.dir = dirPlus(this.dir, 1);
    if (this.dir == start) break;
  }
  this.parent -= .5;
  return {type: "move", direction: this.dir};

};

// new critter: Poop. actionTypes.grow, and sometimes actionTypes.sprout...

function Poop() {
  this.energy = 20 + Math.random() * 4;
}
Poop.prototype.act = function(context) {
  if (this.energy > 20) {
    var space = context.find(" ");
    if (space)
      return {type: "sprout", direction: space};
  }
  if (this.energy < 40)
    return {type: "grow"};
};

// new actionType.sprout: poop turns into new Plant, disappears
actionTypes.sprout = function(critter, vector, action) {
  var baby = elementFromChar(this.legend,
                             "*");
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
      critter.energy <= 2 * baby.energy ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 30;
  this.grid.set(dest, baby);
  if (critter.energy <= 0){
      this.grid.set(vector, null);
  }
  return true;
};

// Alt: Poops occur whenever a creature moves.
actionTypes.move = function(critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  var poop = elementFromChar(this.legend,
                             ".");
  if (dest == null ||
      critter.energy <= 1 ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, critter);
  return true;
};

actionTypes.eat = function(critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  var poop = elementFromChar(this.legend, ".");
  var atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy == null)
    return false;
  critter.energy += atDest.energy;
  this.grid.set(dest, poop);
  return true;
};



animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant,
   ".": Poop
  }
));