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
        this.mult = 5;
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
    
            if (newCell && this.multiply >= this.mult) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 1;
    
                let newGrass = new Grass(newX, newY, 1);
                grassArr.push(newGrass);
                this.multiply = 0;
            }
    }
}