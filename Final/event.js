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
            [this.x, this.y + 2],    
            [this.x + 2, this.y + 1],    
            [this.x + 1, this.y + 2],    
            [this.x, this.y - 2],    
            [this.x - 2, this.y - 1],    
            [this.x - 1, this.y - 2],    
            [this.x + 1, this.y - 2],    
            [this.x + 2, this.y],    
            [this.x + 2, this.y - 1],    
            [this.x - 2, this.y],    
            [this.x - 2, this.y + 1],    
            [this.x - 1, this.y + 2]   
        ];
    }
    acid(){
        for (let l = 0; l < this.directions.length; l++) {

                let dirx = this.directions[l][0]
                let diry = this.directions[l][1]
                if(dirx >= 0, diry >= 0){
                    matrix[diry][dirx] = 9

                    this.die()
                }
        }
    }
    die(){
        setTimeout(()=>{
            for (let l = 0; l < this.directions.length; l++) {

                let dirx = this.directions[l][0]
                let diry = this.directions[l][1]
                if(dirx >= 0, diry >= 0){
                    matrix[diry][dirx] = 0

                }
        }
        EventArr.splice(0,1);
        matrix[this.y][this.x] = 0;
        },200)
    }
}

function click() {
    let l = Math.floor(mouseX / side);
    let m = Math.floor(mouseY / side);
    if(matrix[m][l] == 1){
    matrix[m][l] = 8;
    const event = new Event(m, l);
    EventArr.push(event)
        for (let i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == l && grassArr[i].y == m) {
                grassArr.splice(i, 1);
                break;
            }
        }
    } else if(matrix[m][l] == 2){
        matrix[m][l] = 8;
        const event = new Event(m, l);
        EventArr.push(event)
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == l && grassEaterArr[i].y == m) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 3){
        matrix[m][l] = 8;
        const event = new Event(m, l);
        EventArr.push(event)
        for (let i = 0; i < PredatorArr.length; i++) {
            if (PredatorArr[i].x == l && PredatorArr[i].y == m) {
                PredatorArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 4){
        matrix[m][l] = 8;
        const event = new Event(m, l);
        EventArr.push(event)
        for (let i = 0; i < EagleArr.length; i++) {
            if (EagleArr[i].x == l && EagleArr[i].y == m) {
                EagleArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 5){
        matrix[m][l] = 8;
        const event = new Event(m, l);
        EventArr.push(event)
        for (let i = 0; i < LionArr.length; i++) {
            if (LionArr[i].x == l && LionArr[i].y == m) {
                LionArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 6){
        matrix[m][l] = 8;
        const event = new Event(m, l);
        EventArr.push(event)
        for (let i = 0; i < HumanArr.length; i++) {
            if (HumanArr[i].x == l && HumanArr[i].y == m) {
                HumanArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 7){
        matrix[m][l] = 8;
        const event = new Event(m, l);
        EventArr.push(event)
        for (let i = 0; i < VoidArr.length; i++) {
            if (VoidArr[i].x == l && VoidArr[i].y == m) {
                VoidArr.splice(i, 1);
                break;
            }
        }
    }
    else {
        matrix[m][l] = 8;
        const event = new Event(m, l);
        EventArr.push(event)
    }
}