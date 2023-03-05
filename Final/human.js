class Human extends Creature{
    constructor(x, y, index,gender) {
        super(x,y,index,gender)
        this.energy = 12;
        this.directions = [];
    }
    mul() {
        if(this.gender == 'f'){
        if(frameCount <= 120){
            let emptyCells = this.chooseCell(0);
            let newCell = random(emptyCells);
    
            if (newCell && this.energy >= 24) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 6;
    
                let newHuman = new Human(newX, newY, 6);
                HumanArr.push(newHuman);
                this.energy = 12;
            }
        }
    }
    }

    eat() {
        let newCell1 = random(this.chooseCell(5));
        let newCell2 = random(this.chooseCell(2));
        if (newCell1) {
            let x = newCell1[0];
            let y = newCell1[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 6;
            for (let i = 0; i < LionArr.length; i++) {
                if (LionArr[i].x == x && LionArr[i].y == y) {
                    LionArr.splice(i, 1);
                    break;
                }
            }
            this.energy ++;
            setTimeout(this.mul(),20)
        }
        else if (newCell2) {
            let x = newCell2[0];
            let y = newCell2[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 5;
            for (let i = 0; i < PredatorArr.length; i++) {
                if (PredatorArr[i].x == x && PredatorArr[i].y == y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }
            this.energy ++;
            setTimeout(this.mul(),20)
        }
        else {
            this.move(6);
        }
    }
}