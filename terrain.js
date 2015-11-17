// level the playing field

var typeArray = ['grass', 'rocks', 'water'];
var typeCond = ['burning', 'normal', 'frozen'];


function Tile(x, y) {
        this.x = x;
        this.y = y;
        this.height = Math.floor((Math.random() * 3) +1);
        this.type = typeArray[Math.floor(Math.random() * typeArray.length)];
        this.condition = typeCond[Math.floor(Math.random() * typeCond.length)];
}

Tile.prototype = {
    freeze: function() {
        if (this.condition === "burning"){
            this.condition = "normal";
        }
        if (this.condition === "normal"){
            this.condition = "frozen";
        }
        if (this.condition === "frozen"){
            this.height += 1;
        }
    },
    
    burn: function() {
        if (this.condition === "frozen"){
            this.condition = "normal";
        }
        if (this.condition === "normal"){
            this.condition = "burning";
        }
        if (this.condition === "burning" && this.height != 0){
            this.height -= 1;
        }
    }
};

// var t1 = new Tile(20,20);

function terrain(x,y){
    var outter = [];
    for (var i = 0; i < x; i++){
        var inner = [];
        for (var j = 0; j < y; j++){
            inner.push(new Tile(i,j));
        }
        outter.push(inner);
    }
    
    /*
    for (var k = 0; k < outter.length; k++) {
        var line = [];
        inner = outter[k];
        for (var l = 0; l < inner.length; l++) {
            line.push(inner[l].height);
        }
        console.log(line.join(' '));
    }
    
    /*
    forEach(outter, function(){
        forEach(inner, function(){
            console.log(inner.join(' ').height);
        });
    });
    */
    
    return outter;
}





function apocalypse(map){
    for (var k = 0; k < map.length; k++) {
        var row = map[k];
        
        for (var l = 0; l < row.length; l++) {
        var action = Math.floor((Math.random() * 3)+1);
        if (action < 2) {
                    row[l].burn;
            }
        else if (action > 2) {
                    row[l].freeze;
            }
        }
    }
}
        
function printMapped(map){
    for (var k = 0; k < map.length; k++) {
        var line = [];
        var row = map[k];
        for (var l = 0; l < row.length; l++) {
            if (row[l].condition === 'burning'){
                line.push(9);
            }
            else if (row[l].condition === 'frozen'){
                line.push(0);
            }
            else {
                line.push(row[l].height);
            }
        }
        console.log(line.join(' '));
    }
}

var mapped = terrain(20,20);
apocalypse(mapped);
printMapped(mapped);

