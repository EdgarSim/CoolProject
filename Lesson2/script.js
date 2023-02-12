class Creature{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    eat(){
        console.log("Kera");
    }
    die(){
        console.log("Mera");
    }
}
class GrassEater extends Creature{
    mult(){
        console.log("Mult");
    }
    chooseCell(){
        console.log("Random Cell");
    }
}

class Predator extends Creature{
    constructor(x,y,energy){
        super(x,y)
        this.energy = energy
    }
}

let sheep = new GrassEater(10,12,14)