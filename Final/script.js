
//Matrix
function matrixGenerator(height, width, one, two, three, four, five, six, seven) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix.push([]);
        for (let j = 0; j < width; j++) {
            matrix[i].push(0);
        }
    }
        for (let i = 0; i <= one; i++) {
            let x = Math.floor(Math.random() * width);
            let y = Math.floor(Math.random() * height);

                matrix[y][x] = 1;

        }
        for (let i = 0; i <= two; i++) {
            let x = Math.floor(Math.random() * width);
            let y = Math.floor(Math.random() * height);

                matrix[y][x] = 2;

        }
        for (let i = 0; i <= three; i++) {
            let x = Math.floor(Math.random() * width);
            let y = Math.floor(Math.random() * height);

                matrix[y][x] = 3;

        }
        for (let i = 0; i <= four; i++) {
            let x = Math.floor(Math.random() * width);
            let y = Math.floor(Math.random() * height);
            if(matrix[y][x] == 0){
                matrix[y][x] = 4;
            }
        }
        for (let i = 0; i <= five; i++) {
            let x = Math.floor(Math.random() * width);
            let y = Math.floor(Math.random() * height);
            if(matrix[y][x] == 0){
            matrix[y][x] = 5;
            }
        }
        for (let i = 0; i <= six; i++) {
            let x = Math.floor(Math.random() * width);
            let y = Math.floor(Math.random() * height);
            if(matrix[y][x] == 0){
            matrix[y][x] = 6;
            }
        }
        for (let i = 0; i <= seven; i++) {
            let x = Math.floor(Math.random() * width);
            let y = Math.floor(Math.random() * height);
            if(matrix[y][x] == 0){
            matrix[y][x] = 7;
            }
        }
        return matrix;
}
let matrix = matrixGenerator(50,50,1500,200,200,100,100,50,50);
console.log(matrix);
//Arrays
var grassArr = [];
var grassEaterArr = [];
var PredatorArr = [];
var EagleArr = [];
var LionArr = [];
var HumanArr = [];
var VoidArr = [];
var EventArr = [];
let cnv;
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
                const void1 = new Void(j, i, 7);
                VoidArr.push(void1)
            }
        }
    }
}
let color;
    let n = 1;
    let curSsn;
    let txt = document.querySelector('.text')
    let but = document.querySelector('.season');
    but.onclick = season
function season(){
    let ssns = ['Summer','Fall','Winter','Spring']
    curSsn = ssns[n]
    if(n<=4){
        n++;
    }else{
        n = 0;
    }
}

function draw() {   
    let color = '#9FC131';
    let acid = '#C90000'
    if(curSsn === 'Summer'){
        txt.innerHTML = `Current Season:${curSsn}`
        color = '#9FC131';
        acid = '#C90000';
    }else if(curSsn === 'Fall'){
        txt.innerHTML = `Current Season:${curSsn}`
        color = '#EA6B40';
        acid = '#07BED8';
    }else if(curSsn === 'Winter'){
        txt.innerHTML = `Current Season:${curSsn}`
        color = '#F7F1EA';
        acid = '#00CD73';
    }else if(curSsn === 'Spring'){
        txt.innerHTML = `Current Season:${curSsn}`
        color = '#83AB7F';
        acid = '#C90000';
    }
    cnv.mouseClicked(click)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(color);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3  ) {
                fill("red");
            }
            else if (matrix[y][x] == 4  ) {
                fill("#595340");
            }
            else if (matrix[y][x] == 5  ) {
                fill("orange");
            }
            else if (matrix[y][x] == 6) {   
                fill("#EAD091");
            }
            else if (matrix[y][x] == 7) {
                fill("black");
            }
            else if (matrix[y][x] == 8) {
                fill(acid);
            }
            else if (matrix[y][x] == 9) {
                fill(acid);
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
    for(var i in HumanArr){
        HumanArr[i].eat();
    }
    for(var i in VoidArr){
        VoidArr[i].eat();
    }
    for(var i in EventArr){
        EventArr[i].acid();
    }
}
