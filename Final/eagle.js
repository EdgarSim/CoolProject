class Eagle extends Creature{
    constructor(x, y, index,gender) {
        super(x,y,index,gender)
        this.energy = 10;
        this.directions = [];
    }
    mul() {
        if(this.gender == 'f'){

            if(frameCount <= 180){
                let emptyCells = this.chooseCell(0);
                let newCell = random(emptyCells);
        
                if (newCell && this.energy >= 12) {
                    let newX = newCell[0];
                    let newY = newCell[1];
                    matrix[newY][newX] = 4;
        
                    let newEagle = new Eagle(newX, newY, 4);
                    EagleArr.push(newEagle);
                    this.energy=8;
                }
            }
        }
    }
    eat() {
        let newCell1 = random(this.chooseCell(3));
        let newCell2 = random(this.chooseCell(2));
        if (newCell2) {
            let x = newCell2[0];
            let y = newCell2[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 4;
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.energy+=2;
            this.mul();
        }
        else if (newCell1) {
            let x = newCell1[0];
            let y = newCell1[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 4;
            for (let i = 0; i < PredatorArr.length; i++) {
                if (PredatorArr[i].x == x && PredatorArr[i].y == y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }
            this.energy+=2 ;
            this.mul();
        }
        else {
            this.move(4);
        }
    }
}