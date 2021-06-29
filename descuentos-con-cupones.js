const coupons = [
    'cupon1',
    'cupon2',
    'cupon3',
];

function getCouponValue(coupon) {
    if (coupon === 'cupon1') return 15;
    else if (coupon === 'cupon2') return 20;
    else if (coupon === 'cupon3') return 25;
}

function calculateDiscount() {
    const price = document.getElementById('price').value;
    const coupon = document.getElementById('coupon').value;
    let discount;

    if (!coupons.includes(coupon)) {
        document.getElementById('priceWithDiscount').innerText = "El cupón " + coupon + ' no es válido';
    } else {
        const discount = getCouponValue(coupon);
        const priceWithDiscount = getPriceWithDiscount(price, discount);
        document.getElementById('priceWithDiscount').innerText = "El precio con descuento es " + priceWithDiscount;
    }
}

function getPriceWithDiscount(price, discount) {
    const percentagePricewithDiscount = 100 - discount;
    return (price * percentagePricewithDiscount) / 100;
}