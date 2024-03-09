
function drawSquareCustom(leftX, topY, sLength, rounds, fact1, fact2){
    mainSquare(leftX, topY, "Black", sLength);
    var cornArray = [[leftX, topY],[leftX+sLength, topY],[leftX, topY+sLength],[leftX+sLength, topY+sLength],]
    let startX = random(sLength)+leftX;
    let startY = random(sLength)+topY;
    let factor = fact1;
    for (let i=0; i<rounds; i++){
        let corner = pickCorner(4);
        let cornX = cornArray[corner][0];
        let cornY = cornArray[corner][1];
        let endX = midway(startX, cornX, factor);
        let endY = midway(startY, cornY, factor);
        drawPoint(endX, endY, "Black", 2);
        startX = endX;
        startY = endY;
        if(factor == fact1){
            factor = fact2;
        }else{
            factor = fact1;
        }
    }
}
// import drawSquareCustom from gen.js;

finalDraw=()=>{
    drawSquareCustom(50,50,300,10000,1/2,1/2);
}