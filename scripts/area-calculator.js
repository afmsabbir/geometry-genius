function calculateTriangleArea() {
  const base = getInputField("triangle-b");
  const height = getInputField("triangle-h");

  isNanValue(base, height);

  const area = 0.5 * base * height;
  setElementInnerText("triangle-area", area);
  addToCalculationEntry("Triangle", area);
}

function calculateRectangleArea() {
  const width = getInputField("rectangle-w");
  const length = getInputField("rectangle-l");

  isNanValue(width, length);

  const area = width * length;
  setElementInnerText("rectangle-area", area);
  addToCalculationEntry("Rectangle", area);
  
}

function calculateParallelogramArea() {
  const base = getInputField("parallelogram-b");
  const height = getInputField("parallelogram-h");

  isNanValue(base, height);

  const area = base * height;
  setElementInnerText("parallelogram-area", area);
  addToCalculationEntry("Parallelogram", area);
}

function calculateRhombusArea() {
  const d1 = getInputField("rhombus-d1");
  const d2 = getInputField("rhombus-d2");

  isNanValue(d1, d2);

  const area = 0.5 * d1 * d2;
  setElementInnerText("rhombus-area", area);
  addToCalculationEntry("Rhombus", area);
}

function calculatePentagonArea() {
  const perimeter = getInputField("pentagon-p");
  const base = getInputField("pentagon-b");

  isNanValue(perimeter, base);

  const area = 0.5 * perimeter * base;
  setElementInnerText("pentagon-area", area);
  addToCalculationEntry("Pentagon", area);
}
function calculateEllipseArea() {
  const a = getInputField("ellipse-a");
  const b = getInputField("ellipse-b");

  isNanValue(a, b);

  const area = Math.PI * a * b;
  setElementInnerText("ellipse-area", area);
  addToCalculationEntry("Ellipse", area);
}

// calculation Entry:


