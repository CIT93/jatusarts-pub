import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as orderSumm from "./orderSum-display.js";
import * as orderStorage from "./order-storage.js";;

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
        orderStorage.saveOrders(orders);
        console.log(orders);
        //orderSumDiv.textContent = `Order Summary: ${orderData.qty}, Gift Wrap: ${orderData.giftWrap}, Size: ${orderData.size}.Your total is $${priceData.totalPrice}. Thank you for your custom order!`;
        orderSumm.orderSummary(newOrder);
        
};

const init = function() {
    console.log('App Intialized');
    const loadedEntries = orderStorage.loadOrders();
    if (loadedEntries.length > 0) {
        orders.push(...loadedEntries);
        console.log('Data has been loaded from localStorage');
    } else {
        console.log('No data has been found in localStorage')
    }
    orderFormElement.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);