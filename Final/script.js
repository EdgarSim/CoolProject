let cnv
function click() {
    console.log(mouseX,mouseY);
    let l = Math.round(mouseX / side);
    let m = Math.round(mouseY / side);
    if(matrix[m][l] == 1){
    matrix[m][l] = 8;
        for (let i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == l && grassArr[i].y == m) {
                grassArr.splice(i, 1);
                break;
            }
        }
    } else if(matrix[m][l] == 2){
        matrix[m][l] = 8;
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == l && grassEaterArr[i].y == m) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 3){
        matrix[m][l] = 8;
        for (let i = 0; i < PredatorArr.length; i++) {
            if (PredatorArr[i].x == l && PredatorArr[i].y == m) {
                PredatorArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 4){
        matrix[m][l] = 8;
        for (let i = 0; i < EagleArr.length; i++) {
            if (EagleArr[i].x == l && EagleArr[i].y == m) {
                EagleArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 5){
        matrix[m][l] = 8;
        for (let i = 0; i < LionArr.length; i++) {
            if (LionArr[i].x == l && LionArr[i].y == m) {
                LionArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 6){
        matrix[m][l] = 8;
        for (let i = 0; i < HumanArr.length; i++) {
            if (HumanArr[i].x == l && HumanArr[i].y == m) {
                HumanArr.splice(i, 1);
                break;
            }
        }
    }
    else if(matrix[m][l] == 7){
        matrix[m][l] = 8;
        for (let i = 0; i < PalArr.length; i++) {
            if (PalArr[i].x == l && PalArr[i].y == m) {
                PalArr.splice(i, 1);
                break;
            }
        }
    }
    else {
        matrix[m][l] = 8;
    }
}



function matrixGenerator(height, width, one, two, three, four, five, six, seven) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix.push([]);
        for (let j = 0; j < width; j++) {
            matrix[i].push(0);
        }
    }
    for (let i = 0; i < one; i++) {
        let x = Math.floor(Math.random() * (width - 1));
        let y = Math.floor(Math.random() * (height - 1));
            matrix[y][x] = 1;
    }
    for (let i = 0; i < two; i++) {
        let x = Math.floor(Math.random() * (width - 1));
        let y = Math.floor(Math.random() * (height - 1));
            matrix[y][x] = 2;
    }
    for (let i = 0; i < three; i++) {
        let x = Math.floor(Math.random() * (width - 1));
        let y = Math.floor(Math.random() * (height - 1));
            matrix[y][x] = 3;
    }
    for (let i = 0; i < four; i++) {
        let x = Math.floor(Math.random() * (width - 1));
        let y = Math.floor(Math.random() * (height - 1));
            matrix[y][x] = 4;
    }
    for (let i = 0; i < five; i++) {
        let x = Math.floor(Math.random() * (width - 1));
        let y = Math.floor(Math.random() * (height - 1));
        if(matrix[y][x] == 0){
        matrix[y][x] = 5;
        }
    }
    for (let i = 0; i < six; i++) {
        let x = Math.floor(Math.random() * (width - 1));
        let y = Math.floor(Math.random() * (height - 1));
        if(matrix[y][x] == 0){
        matrix[y][x] = 6;
        }
    }
    for (let i = 0; i < seven; i++) {
        let x = Math.floor(Math.random() * (width - 1));
        let y = Math.floor(Math.random() * (height - 1));
        if(matrix[y][x] == 0){
        matrix[y][x] = 7;
        }
    }
    return matrix;
}
let matrix = matrixGenerator(20,20 );
console.log(matrix);

var grassArr = [];
var grassEaterArr = [];
var PredatorArr = [];
var EagleArr = [];
var LionArr = [];
var HumanArr = [];
var PalArr = [];
var EventArr = [];

var side = 45;

function setup() {
    frameRate(12);
    cnv = createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                const grass = new Grass(j, i, 1);
                grassArr.push(grass); 
            }
            else if(matrix[i][j] === 2) {
                const grassEater = new GrassEater(j, i, 2);
                grassEaterArr.push(grassEater)
            }
            else if(matrix[i][j] === 3) {
                const predator = new Predator(j, i, 3);
                PredatorArr.push(predator)
            }
            else if(matrix[i][j] === 4) {
                const eagle = new Eagle(j, i, 4);
                EagleArr.push(eagle)
            }
            else if(matrix[i][j] === 5) {
                const lion = new Lion(j, i, 5);
                LionArr.push(lion)
            }
            else if(matrix[i][j] === 6) {
                const human = new Human(j, i, 6);
                HumanArr.push(human)
            }
            else if(matrix[i][j] === 7) {
                const pal = new Pal(j, i, 7);
                PalArr.push(pal)
            }
        }
    }
}

function draw() {   
    cnv.mouseClicked(click)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3  ) {
                fill("red");
            }
            else if (matrix[y][x] == 4  ) {
                fill("brown");
            }
            else if (matrix[y][x] == 5  ) {
                fill("orange");
            }
            else if (matrix[y][x] == 6) {   
                fill("#EAD091");
            }
            else if (matrix[y][x] == 7) {
                fill("blue");
            }
            else if (matrix[y][x] == 8) {
                fill("black");
                const event = new Event(y, x);
                EventArr.push(event)
                console.log(y,x);
            }
            else if (matrix[y][x] == 9) {
                fill("green");
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);

        }
    }
    console.log();
    for(var i in grassArr){
        grassArr[i].mul();
    }
    for(var i in grassEaterArr){
        grassEaterArr[i].eat();
    }
    for(var i in PredatorArr){
        PredatorArr[i].eat();
    }
    for(var i in EagleArr){
        EagleArr[i].eat();
    }
    for(var i in LionArr){
        LionArr[i].eat();
    }
    for(var i in HumanArr){
        HumanArr[i].eat();
    }
    for(var i in PalArr){
        PalArr[i].eat();
    }
    for(var i in EventArr){
        EventArr[i].radioactive();
    }
}
