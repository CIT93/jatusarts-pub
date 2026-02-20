// Reference to document
const orderTableBody = document.getElementById('order-table-body')

 //date
const formatDate = function(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    });
}
    

//Export Function for renderOrders for orders
export const renderOrders = function (orders) {
//Logic
//clear
orderTableBody.innerHTML = '';
//loop
for(const order of orders) {
    // creates row for ordertable
    const row = document.createElement('tr');
    
   
    
    //Creates <td> (Populates)
    row.innerHTML = `
    <td>${formatDate(order.timestamp)}</td>
    <td>${order.qty}</td>
    <td>${order.size}</td>
    <td>${order.totalPrice}</td>
    `;

    //Append
    orderTableBody.appendChild(row);
}

};