const shirtPrice = 15;
const giftWrapPrice = 2;

export const calculateTotal = function(orderData) {
    console.log('Inside Caluclator');
    let totalSum = orderData.qty * shirtPrice;
    if (orderData.giftWrap) {
        total += giftWrapPrice;
    }  return {
        totalPrice: totalSum
    };
};

