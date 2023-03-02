class Void extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 12;
        this.directions = [];
    }
    mul() {
        if(frameCount <= 120){
            let emptyCells = this.chooseCell(0);
            let newCell = random(emptyCells);
    
            if (newCell && this.energy >= 17) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 7;
    
                let newVoid = new Void(newX, newY, 7);
                VoidArr.push(newVoid);
                this.energy = 12;
            }
        }
    }

    eat() {
        let newCell1 = random(this.chooseCell(6));
        let newCell2 = random(this.chooseCell(4));
        if (newCell1) {
            let x = newCell1[0];
            let y = newCell1[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 7;
            for (let i = 0; i < HumanArr.length; i++) {
                if (HumanArr[i].x == x && HumanArr[i].y == y) {
                    HumanArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;
            setTimeout(this.mul(),2)
        }
        if (newCell2) {
            let x = newCell2[0];
            let y = newCell2[1];
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
            setTimeout(this.mul(),200)
        }
        else {
            this.move(7);
        }
    }
}