function calculateHeightOfTriangle() {
    const sideTriangle1 = document.getElementById('sideTriangle1').value;
    const sideTriangle2 = document.getElementById('sideTriangle2').value;
    const baseTriangle = document.getElementById('sideTriangle3').value;

    if (sideTriangle1 != sideTriangle2) {
        alert('Los lados 1 y 2 del triángulo deben ser igaules');
    } else {

        const smallTriangleBase = baseTriangle / 2;
        const smallTriangleHypotenuse = sideTriangle2;

        const smallTriangleBaseSquared = smallTriangleBase * smallTriangleBase;
        const smallTriangleHypotenuseSquared = smallTriangleHypotenuse * smallTriangleHypotenuse;

        const heightTriangle = Math.sqrt(smallTriangleHypotenuseSquared - smallTriangleBaseSquared);

        alert('La altura del triangulo es de ' + heightTriangle + 'cm');
    }

}