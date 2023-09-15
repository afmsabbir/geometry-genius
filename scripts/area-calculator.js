function calculateTriangleArea(){
    // get triangle base
    const baseField = document.getElementById("triangle-b");
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);

    // get triangle height
    const heightField = document.getElementById("triangle-h");
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);

    const area = 0.5 * base * height;
    const areaSpan = document.getElementById("triangle-area");
    areaSpan.innerText = area;
}

function calculateRectangleArea() {
    
    const widthField = document.getElementById("rectangle-w");
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText);

    const lengthField = document.getElementById("rectangle-l");
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText);

    const area = width * length;
    const areaSpan = document.getElementById("rectangle-area");
    areaSpan.innerText = area;
}

function calculateParallelogramArea(){
    const baseField = document.getElementById("parallelogram-b");
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);

    const heightField = document.getElementById("parallelogram-h");
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);

    const area = base * height;
    const areaSpan = document.getElementById("parallelogram-area");
    areaSpan.innerText = area;
}

function calculateRhombusArea(){
    const valued1Field = document.getElementById("rhombus-d1");
    const valued1Text = valued1Field.value;
    const valued1 = parseFloat(valued1Text);

    const valued2Field = document.getElementById("rhombus-d2");
    const valued2Text = valued2Field.value;
    const valued2 = parseFloat(valued2Text);

    const area = 0.5 * valued1 * valued2;
    const areaSpan = document.getElementById("rhombus-area");
    areaSpan.innerText = area;
}

function calculatePentagonArea(){
    const perimeterField = document.getElementById("pentagon-p");
    const perimeterFieldText = perimeterField.value;
    const perimeter = parseFloat(perimeterFieldText);

    const baseField = document.getElementById("pentagon-b");
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);

    const area = 0.5 * perimeter * base;
    const areaSpan = document.getElementById("pentagon-area");
    areaSpan.innerText = area;
}