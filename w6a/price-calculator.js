const shirtPrice = 15;
const giftWrapPrice = 2;

export const calculateTotal = function(orderData) {
    console.log('Inside Caluclator');
    let total = orderData.qty * shirtPrice;
    if (orderData.giftWrap) {
        total += giftWrapPrice;
    }  return {
        totalPrice: total
    };
};

