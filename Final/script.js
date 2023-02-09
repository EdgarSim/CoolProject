function matrixGenerator(height, width, one, two, three, four, five) {
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
    return matrix;
}
let matrix = matrixGenerator(100, 100, 6500,2000, 1500,1000,250);
console.log(matrix);

var grassArr = [];
var grassEaterArr = [];
var PredatorArr = [];
var EagleArr = [];
var LionArr = [];
var side = 45;

function setup() {
    frameRate(106);
    createCanvas(matrix[0].length * side, matrix.length * side);
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
        }
    }
}

function draw() {

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
                fill("black");
            }
            else if (matrix[y][x] == 5  ) {
                fill("orange");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);

        }
    }

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
   
}