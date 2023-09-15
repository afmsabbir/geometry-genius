function calculateTriangleArea() {
  const base = getInputField("triangle-b");
  const height = getInputField("triangle-h");

  const area = 0.5 * base * height;
  setElementInnerText("triangle-area", area);
}

function calculateRectangleArea() {
  const width = getInputField("rectangle-w");
  const length = getInputField("rectangle-l");

  const area = width * length;
  setElementInnerText("rectangle-area", area);
}

function calculateParallelogramArea() {
  const base = getInputField("parallelogram-b");
  const height = getInputField("parallelogram-h");

  const area = base * height;
  setElementInnerText("parallelogram-area", area);
}

function calculateRhombusArea() {
  const d1 = getInputField("rhombus-d1");
  const d2 = getInputField("rhombus-d2");

  const area = 0.5 * d1 * d2;
  setElementInnerText("rhombus-area", area);
}

function calculatePentagonArea() {
  const perimeter = getInputField("pentagon-p");
  const base = getInputField("pentagon-b");

  const area = 0.5 * perimeter * base;
  setElementInnerText("pentagon-area", area);
}
function calculateEllipseArea() {
  const a = getInputField("ellipse-a");
  const b = getInputField("ellipse-b");

  const area = Math.PI * a * b;
  setElementInnerText("ellipse-area", area);
}
