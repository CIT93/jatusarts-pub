// Reference to document
const orderTableBody = document.getElementById('order-table-body')
//Export Function for renderOrders for orders
export const renderOrders = function (orders) {
//Logic
//clear
orderTableBody.innerHTML = '';
//loop
for(const order of orders) {
    // creates row for ordertable
    const row = document.createElement('tr');
    
    //date
    const formatDate = new Date(order.timestamp).toLocaleDateString();
    
    
    //Creates <td> (Populates)
    row.innerHTML = `
    <td>${formatDate(order.timestamp)}</td>
    <td>${order.qty}</td>
    <td>${order.size}</td>
    <td>${order.totalPrice}</td>
    `;

}
//Append
orderTableBody.appendChild(row);

};