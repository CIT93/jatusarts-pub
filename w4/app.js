import * as orderForm from "./order-handler.js"

const orderFormElement = document.getElementById('order-form');
const orderSumDiv = document.getElementById ('order-summary');

const handleOrderSubmit = function(event) {
    event.preventDefault()
    const orderData = orderForm.getOrderInputs();

    orderSumDiv.textContent = `Order Summary: ${orderData.qty}, Gift Wrap: ${orderData.giftWrap}, Size: ${orderData.size}. Thank you for your custom order!`;
};

const init = function() {
    orderFormElement.addEventListener('submit', handleOrderSubmit);
    console.log('App Intialized');
};

document.addEventListener('DOMContentLoaded', init);