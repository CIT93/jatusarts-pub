import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as orderSumm from "./orderSum-display.js";

const orderFormElement = document.getElementById('order-form');
//const orderSumDiv = document.getElementById ('order-summary');

const orders = [];

const handleOrderSubmit = function(event) {
    event.preventDefault()
    const orderData = orderForm.getOrderInputs();
    const priceData = priceCalculator.calculateTotal(orderData);
    
    const newOrder = {
        ...orderData,
        ...priceData,
        timestamp: new Date().toISOString()
    
    }
        orders.push(newOrder);
        console.log(orders);
        //orderSumDiv.textContent = `Order Summary: ${orderData.qty}, Gift Wrap: ${orderData.giftWrap}, Size: ${orderData.size}.Your total is $${priceData.totalPrice}. Thank you for your custom order!`;
        orderSumm.orderSummary(newOrder);
        
};

const init = function() {
    orderFormElement.addEventListener('submit', handleOrderSubmit);
    console.log('App Intialized');
};

document.addEventListener('DOMContentLoaded', init);