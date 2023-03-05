class Creature{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.gender = '';
    }
    generateGender(){
        let a = Math.random()
        if(a < 0.6){
            this.gender = 'f';
        }else{
            this.gender = 'g';
        }
    }

    getNewCoordinates() {
        this.generateGender();
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