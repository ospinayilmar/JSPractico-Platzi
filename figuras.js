// Código del cuadrado
function perimeterSquare(ladoSquare) {
    return ladoSquare * 4;
}

function areaSquare(ladoSquare) {
    return ladoSquare * ladoSquare;
}

console.group("Cuadrados");
console.log("El perímetro del cuadrado mide: " + perimeterSquare(56) + "cm");
console.log("El área del cuadrado mide: " + areaSquare(56) + "cm^2");
console.groupEnd();

// Código del triángulo
function perimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle) {
    return sideTriangle1 + sideTriangle2 + baseTriangle;
}

function areaTriangle(baseTriangle, heightTriangle) {
    return baseTriangle * heightTriangle / 2;
}


console.group("Triángulos");
console.log("El perímetro del triángulo es: " + perimeterTriangle(6, 6, 4) + "cm");
console.log("El área del triángulo es: " + areaTriangle(4, 5.5) + "cm^2");
console.groupEnd();

// Código del círculo
function diameterCircle(radius) {
    return radius * 2;
}

function perimeterCircle(radius) {
    return diameterCircle(radius) * Math.PI;
}

function areaCircle(radius) {
    return (radius * radius) * Math.PI;
}

console.group("Círculos");
console.log("El diámetro del círculo es: " + diameterCircle(5) + "cm");
console.log("El perímetro del círculo es: " + perimeterCircle(5) + "cm");
console.log("El área del círculo es: " + areaCircle(5) + "cm");
console.groupEnd();