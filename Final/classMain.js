class Creature{
    constructor(x, y, index, gender) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.gender = this.generateGender();
    }
    generateGender() {

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    move(ind) {
        let newCell1 = random(this.chooseCell(0));
        let newCell2 = random(this.chooseCell(1));
        if (newCell2) {
            let x = newCell2[0];
            let y = newCell2[1];
            matrix[this.y][this.x] = 1;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = ind;
            this.energy--;
        }
        else if(newCell1) {
            let x = newCell1[0];
            let y = newCell1[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = ind;
            this.energy--;
        }
    }
    die(arr) {
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].x == this.x && arr[i].y == this.y) {
                arr.splice(i, 1);
                break;
            }
        }
    }
}

class Grass extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.multiply >= 4) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;

            let newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}
class GrassEater extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 8;
        this.directions = [];
    }
    mul() {
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell && this.energy >= 16) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;

            let newGrassEater = new GrassEater(newX, newY, 1);
            grassEaterArr.push(newGrassEater);
            this.energy-=2;
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
            setTimeout(this.mul(),2)
        }
        else {
            this.move();
        }
    }
}
class Predator extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 10;
        this.directions = [];
    }

    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.energy >= 16) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;

            let newPredator = new Predator(newX, newY, 2);
            PredatorArr.push(newPredator);
            this.energy==8;
        }
        else if(this.energy = 0){
            this.die(PredatorArr)
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
            this.energy += 2;
            setTimeout(this.mul(),2)
        }
        else {
            this.move(3);
        }
    }
}
class Eagle extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 20;
        this.directions = [];
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.energy >= 25) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;

            let newEagle = new Eagle(newX, newY, 3);
            EagleArr.push(newEagle);
            this.energy--;
        }
    }
    eat() {
        let newCell1 = random(this.chooseCell(3));
        let newCell2 = random(this.chooseCell(2));
        if (newCell1) {
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
            this.energy += 2;
            this.mul();
        }
        else if (newCell2) {
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
            this.energy++;
            this.mul();
        }
        else {
            this.move(4);
        }
    }
}
class Lion extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 12;
        this.directions = [];
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.energy >= 14) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;

            let newLion = new Lion(newX, newY, 4);
            LionArr.push(newLion);
            this.energy = 12;
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
class Human extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 12;
        this.directions = [];
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.energy >= 14) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;

            let newHuman = new Human(newX, newY, 4);
            HumanArr.push(newHuman);
            this.energy = 12;
        }
    }

    eat() {
        let newCell = random(this.chooseCell(5));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 5;
            for (let i = 0; i < LionArr.length; i++) {
                if (LionArr[i].x == x && LionArr[i].y == y) {
                    LionArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;
            setTimeout(this.mul(),2)
        }
        else {
            this.move(6);
        }
    }
}
class Pal extends Creature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 12;
        this.directions = [];
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.energy >= 14) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;

            let newPal = new Pal(newX, newY, 6);
            PalArr.push(newPal);
            this.energy = 12;
        }
    }

    eat() {
        let newCell = random(this.chooseCell(6));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[this.y][this.x] = 5;
            for (let i = 0; i < HumanArr.length; i++) {
                if (HumanArr[i].x == x && HumanArr[i].y == y) {
                    HumanArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;
            setTimeout(this.mul(),2)
        }
        else {
            this.move(7);
        }
    }
}
class Event {
    constructor(y,x){
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],    
        ];
    }
    radioactive(){
        for (let l = 0; l < this.directions.length; l++) {

                let dirx = this.directions[l][0]
                let diry = this.directions[l][1]
                if(dirx < matrix.length , diry < matrix[l].length){
                    matrix[diry][dirx] = 9
                }
        }
        console.log(this.x,this.y);
    }
}