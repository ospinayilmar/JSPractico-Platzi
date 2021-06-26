// Código del cuadrado
const sideSquare = 5;
const perimeterSquare = sideSquare * 4;
const areaSquare = sideSquare * sideSquare;

console.group("Cuadrados");
console.log("Los lados del cuadrado miden: " + sideSquare + "cm");
console.log("El perímetro del cuadrado mide: " + perimeterSquare + "cm");
console.log("El área del cuadrado mide: " + areaSquare + "cm^2");
console.groupEnd();

// Código del triángulo
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;
const heightTriangle = 5.5;
const perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle;
const areaTriangle = (baseTriangle * heightTriangle) / 2;


console.group("Triángulos");
console.log("Los lados del triángulo miden: " + sideTriangle1 + ", " + sideTriangle2 + ", " + baseTriangle + "cm");
console.log("La altura del triángulo es: " + heightTriangle + "cm");
console.log("El perímetro del triángulo es: " + perimeterTriangle + "cm");
console.log("El área del triángulo es: " + areaTriangle + "cm^2");
console.groupEnd();

// Código del círculo
const radius = 4;
const diameter = radius * 2;
const PI = Math.PI;
const perimeterCircle = diameter * PI;
const areaCircle = PI * (radius * radius);

console.group("Círculos");
console.log("El radio del círculo es: " + radius + "cm");
console.log("El diámetro del círculo es: " + diameter + "cm");
console.log("PI es: " + PI);
console.log("El perímetro del círculo es: " + perimeterCircle + "cm");
console.log("El área del círculo es: " + areaCircle + "cm");
console.groupEnd();