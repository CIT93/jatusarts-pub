import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as orderSumm from "./orderSum-display.js";
import * as orderStorage from "./order-storage.js";
import * as orderList from './order-list.js';

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
        orderList.renderOrders(orders);
        console.log(orders);
        //orderSumDiv.textContent = `Order Summary: ${orderData.qty}, Gift Wrap: ${orderData.giftWrap}, Size: ${orderData.size}.Your total is $${priceData.totalPrice}. Thank you for your custom order!`;
        orderSumm.orderSummary(newOrder);
        
};

const init = function() {
    console.log('App Intialized');
    const loadedOrders = orderStorage.loadOrders();
    if (loadedOrders.length > 0) {
        orders.push(...loadedOrders);
        console.log('Data has been loaded from localStorage');
    } else {
        console.log('No data has been found in localStorage')
    }
    orderList.renderOrders(orders);
    orderFormElement.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);