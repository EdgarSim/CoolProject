class Predator extends Creature{
    constructor(x, y, index,gender) {
        super(x,y,index,gender)
        this.energy = 8;
        this.directions = [];
    }

    mul() {
        if(this.gender == 'f'){
        if(frameCount <= 150){
            let emptyCells = this.chooseCell(0);
            let newCell = random(emptyCells);
    
            if (newCell && this.energy >= 11) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 3;
    
                let newPredator = new Predator(newX, newY, 3);
                PredatorArr.push(newPredator);
                this.energy=8;
            }
            else if(this.energy <= 0){
                this.die(PredatorArr)
            }
        }
    }
    }
    eat() {
        let newCell = random(this.chooseCell(2));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 3;
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.energy+=2;
            setTimeout(this.mul(),2)
        }
        else {
            this.move(3);
        }
    }
}