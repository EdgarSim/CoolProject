class Lion extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 12;
        this.directions = [];
    }
    mul() {
        if(frameCount <= 120){
            let emptyCells = this.chooseCell(0);
            let newCell = random(emptyCells);
    
            if (newCell && this.energy >= 3) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 5;
    
                let newLion = new Lion(newX, newY, 5);
                LionArr.push(newLion);
                this.energy = 12;
            }
        }
    }

    eat() {
        let newCell = random(this.chooseCell(4));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 5;
            for (let i = 0; i < EagleArr.length; i++) {
                if (EagleArr[i].x == x && EagleArr[i].y == y) {
                    EagleArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;
            this.mul();
        }
        else {
            this.move(5);
        }
    }
}