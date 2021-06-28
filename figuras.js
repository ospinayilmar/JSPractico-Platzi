// Código del cuadrado
function getPerimeterSquare(ladoSquare) {
    return ladoSquare * 4;
}

function getAreaSquare(ladoSquare) {
    return ladoSquare * ladoSquare;
}

// Funciones para mostrar los cáculos del triángulo
function calculatePerimeterOfSquare() {
    const sideSquare = document.getElementById('sideSquare').value;
    alert('El Perímetro del cuadrado es ' + getPerimeterSquare(sideSquare) + 'cm');
}

function calculateAreaOfSquare() {
    const sideSquare = document.getElementById('sideSquare').value;
    alert('El Perímetro del cuadrado es ' + getAreaSquare(sideSquare) + 'cm^2');
}

// Código del triángulo
function getPerimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle) {
    return (sideTriangle1 + sideTriangle2) + baseTriangle;
}

function getAreaTriangle(baseTriangle, heightTriangle) {
    return (baseTriangle * heightTriangle) / 2;
}

// Funciones para mostrar los cáculos del triángulo
function calculatePerimeterOfTriangle() {
    const sideTriangle1 = parseInt(document.getElementById('sideTriangle1').value);
    const sideTriangle2 = parseInt(document.getElementById('sideTriangle2').value);
    const baseTriangle = parseInt(document.getElementById('baseTriangle').value);

    alert('El Perímetro del triángulo es ' + getPerimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle) + 'cm');
}

function calculateAreaOfTriangle() {
    const baseTriangle = parseInt(document.getElementById('baseTriangle').value);
    const heightTriangle = parseInt(document.getElementById('heightTriangle').value);

    alert('El área del triángulo es ' + getAreaTriangle(baseTriangle, heightTriangle) + 'cm^2');
}

// Funciones para hacer cáculos del círculo
function getDiameterCircle(radius) {
    return radius * 2;
}

function getPerimeterCircle(radius) {
    return getDiameterCircle(radius) * Math.PI;
}

function getAreaCircle(radius) {
    return (radius * radius) * Math.PI;
}

// Funciones para mostrar los cáculos del círculo
function calculateDiameterOfCircle() {
    const radiusCircle = parseInt(document.getElementById('radiusCircle').value);
    alert('El diámetro del círculo es ' + getDiameterCircle(radiusCircle) + 'cm');
}

function calculatePerimeterOfCircle() {
    const radiusCircle = parseInt(document.getElementById('radiusCircle').value);
    alert('El Perímetro del círculo es ' + getPerimeterCircle(radiusCircle) + 'cm');
}

function calculateAreaOfCircle() {
    const radiusCircle = parseInt(document.getElementById('radiusCircle').value);
    alert('El Perímetro del círculo es ' + getAreaCircle(radiusCircle) + 'cm^2');

}