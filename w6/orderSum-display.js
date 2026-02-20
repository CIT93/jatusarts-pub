const orderContainer = document.getElementById('order-summary');

const totalDisplay = orderContainer.querySelector('#display-total');
const qtyDisplay = orderContainer.querySelector('#display-qty');
const sizeDisplay = orderContainer.querySelector('#display-size');
const giftDisplay = orderContainer.querySelector('#display-gift');

export const orderSummary = function(order) {
    totalDisplay.textContent = `${order.totalPrice}`;
    qtyDisplay.textContent = `${order.qty} ${order.size}`;
    sizeDisplay.textContent
    giftDisplay.textContent = `${order.giftWrap}`;
    if (order.giftWrap) {
        giftDisplay.textContent = 'Yes';
    } else {
        giftDisplay.textContent = 'No';
    };
    orderContainer.style.display = 'block';
};