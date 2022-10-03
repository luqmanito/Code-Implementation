const Fazzfood = (price, voucher, distance, tax) => {
    if (isNaN(price) || typeof voucher !== 'string' || (isNaN(distance)) || typeof tax !== 'boolean') {
        console.log('invalid input');
    } else {
        let checkDeliveryFee = deliveryFee(distance)
        let checkedTax = taxCheck(tax, price)
        let voucherCheck = checkPromo(voucher, price)
        let SubTotal = checkDeliveryFee + checkedTax + voucherCheck
        console.log(
            `Harga : ${price} 
Potongan : ${voucherCheck} 
Biaya Antar: ${checkDeliveryFee} 
Pajak : ${checkedTax} 
SubTotal: ${SubTotal}`
        );
    }
}

function deliveryFee(distance) {

    let difference = distance - 2
    let output = difference * 3000 + 5000

    if (distance <= 2) {
        return output = 5000
    } else if (distance > 2) {
        return output
    }
    return output
}

//   console.log(deliveryFee(4));

function taxCheck(tax, price) {
    let priced = price
    if (tax) {
        return output = priced * 0.05
    } else {
        return output = 0
    }
}
//   console.log(taxCheck(true));

function checkPromo(code, price) {
    if (price >= 50_000 && code === 'fazzfood50') {
        let discount = price * 0.5
        if (discount >= 50_000) {
            return discount = 50_000
        } else {
            return discount
        }
    } else if (price >= 25_000 && code === 'ditraktir60') {
        let discount = price * 0.6
        if (discount >= 30_000) {
            return discount = 30_000
        } else {
            return discount
        }
    }
    else {
        return price = 0
    }
}

Fazzfood(75000, 'fazzfood50', 5, true)



// console.log(checkPromo('fazzfood50', 75000));
// Price : 75000
// Discount : 37500
// Delivery Fee : 14000
// Tax : 370
// SubTotal : 55250