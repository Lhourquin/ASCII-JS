//step 1
console.log("step 1");

function drawRectangle6x10() {
    let starOfTop = '*';
    for (let i = 0; starOfTop.length < 6; i++) {
        starOfTop += "*";
    }
    for (let i = 0; i < 10; i++) {
        console.log(starOfTop);
    }
}

drawRectangle6x10();

//step 2 
console.log("step 2");

function drawRectangle(length, width) {

    let starOfTop = '*';
    for (let i = 0; starOfTop.length < width; i++) {
        starOfTop += "*";
    }
    for (let i = 0; i < length; i++) {
        console.log(starOfTop);
    }
}

drawRectangle(10, 6);

//step 3
console.log("step 3");

function drawRectangleWithMode(length, width, mode) {

    if (mode === "filled") {
        let starOfTop = '*';
        for (let i = 0; starOfTop.length < width; i++) {
            starOfTop += "*";
        }
        for (let i = 0; i < length; i++) {
            console.log(starOfTop);
        }
    } else if (mode === "borders") {
        let leftTopCorner = "╔";
        let rightTopCorner = "╗";
        let border = "═";
        let borderTop = leftTopCorner + border.repeat(width) + rightTopCorner;
        console.log(borderTop);
        let verticalBorderChar = "║";
        let spaceBetweenVerticalBorder = " ";
        let verticalBorder = verticalBorderChar + spaceBetweenVerticalBorder.repeat(width) + verticalBorderChar;
        for (let i = 0; i < length; i++) {
            console.log(verticalBorder)
        }
        let leftBottomCorner = "╚";
        let rightBottomCorner = "╝";
        let borderBottom = leftBottomCorner + border.repeat(width) + rightBottomCorner;
        console.log(borderBottom);
    }
}
drawRectangleWithMode(10, 6, "borders");

//step 4 & step 9
console.log("step 4 & step 9");
function drawSquare(size, mode) {
    let length = size * 2;

    if (mode === "filled") {
        for (let i = 0; i < size; i++) {
            console.log("*".repeat(length));
        }
    } else if (mode === "borders") {
        let leftTopCorner = "╔";
        let rightTopCorner = "╗";
        let border = "═";
        let borderTop = leftTopCorner + border.repeat(length) + rightTopCorner;
        console.log(borderTop);
        let verticalBorderChar = "║";
        let spaceBetweenVerticalBorder = " ";
        let verticalBorder = verticalBorderChar + spaceBetweenVerticalBorder.repeat(length) + verticalBorderChar;
        for (let i = 0; i < size; i++) {
            console.log(verticalBorder)
        }
        let leftBottomCorner = "╚";
        let rightBottomCorner = "╝";
        let borderBottom = leftBottomCorner + border.repeat(length) + rightBottomCorner;
        console.log(borderBottom);
    }
}
drawSquare(6, "borders");

//step 5
console.log("step 5");

function drawAnyShape(shape) {
    if (shape === "rectangle") {
        drawRectangle6x10();
    } else if (shape === "square") {
        drawSquare(6, "borders");
    }
}
drawAnyShape("square");

//step 6 
console.log("step 6");

function drawRightTriangle(height) {
    let count = height;
    let star = "*";

    for (let i = 0; i < height; i++) {
        let space = " ";
        console.log(space.repeat(count) + star);
        star += "*";
        count--;
    }
}
drawRightTriangle(6);

//step 7
console.log("step 7");

function drawEquilateralTriangle(height) {
    let count = height;
    let star = "*";
    let secondStar = "";
    for (let i = 0; i < height; i++) {
        let space = " ";
        console.log(space.repeat(count) + star + secondStar + space.repeat(count));
        star += "*";
        secondStar += "*";
        count--;
    }

}
drawEquilateralTriangle(6);

//step 8
console.log("step 8");

function drawAnyShape2(shape) {
    if (shape === "rectangle") {
        drawRectangle6x10();
    } else if (shape === "square") {
        drawSquare(6, "border");
    } else if (shape === "right triangle") {
        drawRightTriangle(6);
    } else if (shape === "triangle") {
        drawEquilateralTriangle(6);
    }
}
drawAnyShape2("triangle");

//step 10
const prompt = require('prompt-sync')();

const shape = prompt('What do you want to draw ?');
if (shape === "square") {
    const size = prompt('What size for your square ?');
    const mode = prompt('What mode for your sqare ?');
    drawSquare(size, mode);

} else if (shape === "rectangle") {
    const lenght = prompt('What lenght for your rectangle?');
    const width = prompt('What width for your rectangle ?');
    const mode = prompt('What mode for your rectangle ?');
    drawRectangleWithMode(lenght, width, mode);

} else if( shape === "right triangle"){
    const height = prompt('What height for your right triangle ?');
    drawRightTriangle(height);
} else if( shape === "equilateral triangle"){
    const height = prompt('What height for your equilateral triangle ?');
    drawEquilateralTriangle(height);
}
 