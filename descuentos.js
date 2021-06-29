function calculateDiscount() {
    const price = document.getElementById('price').value;
    const discount = document.getElementById('discount').value;

    const priceWithDiscount = getPriceWithDiscount(price, discount);

    document.getElementById('priceWithDiscount').innerText = "El precio con descuento es " + priceWithDiscount;
}

function getPriceWithDiscount(price, discount) {
    const percentagePricewithDiscount = 100 - discount;
    return (price * percentagePricewithDiscount) / 100;
}