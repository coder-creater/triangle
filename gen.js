m=document.getElementById("canvas").getContext("2d")
    //failed attempt at making a triangle
    /*initTriangle=()=>{
        m.moveTo(20,20);
        m.beginPath();
        m.lineTo(30,30);
        m.lineTo(40,40);
        m.lineTo(20,20);
        m.fill();
        m.closePath();
    }*/
    
    //to initialize the square
    mainSquare=(x,y,c,s)=>{
        m.fillStyle=c
        m.strokeRect(x,y,s,s) //(x,y) give coords for top left corner
    }

    //creating variables
    var sideLength = 300;
    var leftX = 50;
    var rightX = leftX+sideLength;
    var topY = 50;
    var botY = topY+sideLength;
    var lastCorner = 1;
    var rounds = 10000;
    var cornArray = [[leftX, topY],[rightX, topY],[leftX, botY],[rightX, botY]]
    var testArray = [[1,2],[3,4],[5,6],[7,8]]
    /*corner guide:
        top left: 0
        top right: 1
        bottom left: 2
        bottom right: 3
    */

    //random number chooser
    random=(max)=>{
        return Math.floor(Math.random()*max);
    }

    //picking corners:
    pickCorner=(sides)=>{
        let corner = random(sides);
        while(corner == lastCorner){
            corner = random(sides);
        }
        lastCorner = corner;
        return corner;
    }
    pickCorner2=()=>{
        let corner = random(sides);
        while(corner == lastCorner){
            corner = random(sides);
        }
        lastCorner = corner;
        return corner;
    }

    //picking starting points:
    pickStartCoord=()=>{
        let point = random(sideLength)+leftX;
        return point;
    }

    //to calculate midway point
    midway=(first, second, factor)=>{
        if(first >= second){
            return first - factor*((first - second));
        }else if(first < second){
            return first + factor*((second-first));
        }
    }

    //draw a point:
    drawPoint=(x,y,c,s)=>{
        m.fillStyle=c
        m.fillRect(x,y,s,s)
    }

    //draw square fractal:
    drawSquareFractal=()=>{
        let startX = pickStartCoord();
        let startY = pickStartCoord();
        let factor = 1/2;
        for (let i=0; i<rounds; i++){
            let corner = pickCorner(4);
            let cornX = cornArray[corner][0];
            let cornY = cornArray[corner][1];
            let endX = midway(startX, cornX, factor);
            let endY = midway(startY, cornY, factor);
            drawPoint(endX, endY, "Black", 2);
            startX = endX;
            startY = endY;
            if(factor=1/2){
                factor=3/6;
            }else{
                factor = 1/2;
            }
            
        }

        
    }
    
    var startX = pickStartCoord();
    var startY = pickStartCoord();
    var factor = 1/2;

    //draw a square fractal animated
    drawAnimSpeed=(speed)=>{
        for(let i=0;i<speed;i++){
            let corner = pickCorner(4);
            let cornX = cornArray[corner][0];
            let cornY = cornArray[corner][1];
            let endX = midway(startX, cornX, factor);
            let endY = midway(startY, cornY, factor);
            drawPoint(endX, endY, "Black", 2);
            startX = endX;
            startY = endY;
            if(factor=1/2){
                factor=3/6;
            }else{
                factor = 1/2;
            }
        }
        requestAnimationFrame(drawAnimSpeed);
    }

    drawAnim=()=>{  
        let corner = pickCorner(4);
        let cornX = cornArray[corner][0];
        let cornY = cornArray[corner][1];            
        let endX = midway(startX, cornX, factor);
        let endY = midway(startY, cornY, factor);
        drawPoint(endX, endY, "Black", 2);
        startX = endX;
        startY = endY;
        if(factor=1/2){
            factor=3/6;
        }else{
            factor = 1/2;
        }
        requestAnimationFrame(drawAnim);
    }

    drawAnimWhile=(speed)=>{
        mainSquare(leftX, topY, "Black", sLength);  
        let der = 0
        while(der < speed){
            let corner = pickCorner(4);
            let cornX = cornArray[corner][0];
            let cornY = cornArray[corner][1];            
            let endX = midway(startX, cornX, factor);
            let endY = midway(startY, cornY, factor);
            drawPoint(endX, endY, "Black", 2);
            startX = endX;
            startY = endY;
            if(factor=1/2){
                factor=3/6;
            }else{
                factor = 1/2;
            }
            der += 1;
        }
        requestAnimationFrame(drawAnimWhile);
    }
    // var cornArray = [[leftX, topY],[rightX, topY],[leftX, botY],[rightX, botY]]
    drawSquareCustom=(leftX, topY, sLength, rounds, fact1, fact2)=>{
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

    // drawSquareCustom(0, 0, 200, 10000, 1/3, 1/3);
    // drawSquareCustom(200, 0, 200, 10000, 1/3, 2/3);
    // // drawSquareCustom(400, 0, 200, 10000, 1/5, 3/5);
    // // drawSquareCustom(600, 0, 200, 10000, 1/5, 4/5);
    // drawSquareCustom(0, 200, 200, 10000, 2/3, 2/3);
    // drawSquareCustom(200, 200, 200, 10000, 2/5, 3/5);
    // drawSquareCustom(400, 200, 200, 10000, 2/5, 4/5);
    // drawSquareCustom(600, 200, 200, 10000, 3/5, 3/5);
    // drawSquareCustom(200, 400, 200, 10000, 3/5, 4/5);
    // drawSquareCustom(400, 400, 200, 10000, 4/5, 4/5);
    //drawAnim();

    drawTriangleFractal=(leftX, botY, sLength, rounds, fact1, fact2)=>{
        let cornArray = [[leftX, botY], [leftX+sLength, botY], [leftX+(sLength/2), botY-((sLength/2)*1.7321)]]
        let startX = random(sLength)+leftX;
        let startY = random(sLength)+(botY-sLength);
        let factor = fact1;
        let j = 0;
        for(let i=0; i<rounds;i++){
            let corner = random(3);
            let cornX = cornArray[corner][0];
            let cornY = cornArray[corner][1];
            let endX = midway(startX, cornX, factor);
            let endY = midway(startY, cornY, factor);
            if(j>6){
                drawPoint(endX, endY, "Black", 2);
            }
            startX = endX;
            startY = endY;
            if(factor == fact1){
                factor = fact2;
            }else{
                factor = fact1;
            }
            j++;
        }
    }

    //drawTriangleFractal(0, 500, 500, 5000, 1/2, 1/2);

    drawPoly=(xCent, yCent, size, sides)=>{
        m.beginPath();
        m.moveTo(xCent+size*Math.cos(0),yCent+size*Math.sin(0));
        for(let i=0;i<=sides;i++){
            m.lineTo(xCent+size*Math.cos(i*2*Math.PI/sides),yCent+size*Math.sin(i*2*Math.PI/sides))
        }
        m.stroke();
    }

    customPolyFractal=(xCent, yCent, size, sides, rounds, fact1, fact2)=>{
        m.clearRect(0,0,canvas.width,canvas.height);
        let cornArray = [];
        m.beginPath();
        m.moveTo(xCent+size*Math.cos(0),yCent+size*Math.sin(0));
        for(let i=0;i<=sides;i++){
            let xNew=Math.ceil(xCent+size*Math.cos(i*2*Math.PI/sides));
            let yNew=Math.ceil(yCent+size*Math.sin(i*2*Math.PI/sides));
            m.lineTo(xNew,yNew);
            cornArray.push([xNew,yNew])
        }
        m.stroke();
        let startX = xCent;
        let startY = yCent;
        let factor = fact1;
        for (let i=0; i<rounds; i++){
            let corner = pickCorner((sides));
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

    drawFinal=()=>{
        let sides = document.getElementById("sides").value;
        console.log(sides);
        customPolyFractal(500,500,300,sides,60000,2/4,2/4);
    }
    
    //customPolyFractal(500,500,300,5,60000,2/4,2/4)
    //drawSquareCustom(100,100,300,10000,1/2,1/2)
