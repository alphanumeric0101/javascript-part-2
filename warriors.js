// this be the warriors branch

function Warrior(name, gender) {
        this.name = name;
        this.gender = gender;
        this.level = 1;
        this.weapon = "wooden sword";
        this.power = Math.floor((Math.random() * 100) + 1);
    }


Warrior.prototype = {
    fight: function() {
        console.log(this.name + " rushes to the arena with their " + this.weapon);
    },
    
    faceOff: function(opponent) {
        if (opponent.power > this.power){
        console.log("A cataclysmic embroilment results in " + this.name + "capitulating ");
        }
        if (opponent.power < this.power){
            console.log("After a valiant effort " + opponent.name + "is thoroughly thrashed by" + this.name);
        }
        if (opponent.power === this.power){
            console.log("Worthy adversaries shake hands");
        }
    }
};

var w1 = new Warrior("Max","M");
var w2 = new Warrior("Clementine","F");

w1.faceOff(w2);
