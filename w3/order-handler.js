const qtyInput = document.getElementById("qty");

const sizeRadio = document.querySelectorAll('input[name = "size"]');

const giftWrapCheck = document.getElementById("gift-wrap");

const getSelectedRadioValue = function() {
  for (const radio of sizeRadio) {
    if (radio.checked) {
        return radio.value
    }
  }
};


export function getOrderInputs() {
    const orderData = {
        qty: parseInt(qtyInput.value) || 1,
        size: getSelectedRadioValue(),
        giftWrap: giftWrapCheck.checked 
    };
    return orderData
}

