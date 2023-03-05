class GrassEater extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 6;
        this.directions = [];
    }
    mul() {
        if(frameCount <= 120){
            let emptyCells = this.chooseCell(1);
            let newCell = random(emptyCells);
    
            if (newCell && this.energy >= 13) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 1;
    
                let newGrassEater = new GrassEater(newX, newY, 2);
                grassEaterArr.push(newGrassEater);
                this.energy = 5;
            }
        }
    }
    move() {
        let newCell = random(this.chooseCell(0));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 2;
            this.energy--;
            if (this.energy <= 0) {
                this.die(grassEaterArr);
            }
        }
    }
    eat() {
        let newCell = random(this.chooseCell(1));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 2;
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
            setTimeout(this.mul(),500)
        }
        else {
            this.move();
        }
    }
}