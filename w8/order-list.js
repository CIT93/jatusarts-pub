// Reference to document
const orderTableBody = document.getElementById('order-table-body')

// order-list.js top of file
let moduleCallbacks = {};


//date
const formatDate = function (timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    });
}


//const tableBody = document.getElementById('order-table-body');

orderTableBody.addEventListener('click', function (event) {
    const target = event.target;

    // 1. Get the ID from the button that was clicked
    const id = target.dataset.id;

    // 2. Guard Clause: If they clicked a row (white space) but NOT a button, 
    // there will be no ID. So we stop the function immediately.
    if (!id) return;

    if(target.classList.contains('delete-btn')) {
        if(moduleCallbacks.onDelete) {
            moduleCallbacks.onDelete(id);
        }
    }
    if(target.classList.contains('edit-btn')){
        if(moduleCallbacks.onEdit) {
            moduleCallbacks.onEdit(id);
        }
    }
    // 3. Temporary Test: Log the ID to prove it works!
    //console.log("Clicked button with ID:", id);
});




//Export Function for renderOrders for orders
export const renderOrders = function (orders, callbacks) {
    moduleCallbacks = callbacks || {};
    //Logic
    //clear
    orderTableBody.innerHTML = '';
    //loop
    for (const order of orders) {
        // creates row for ordertable
        const row = document.createElement('tr');



        //Creates <td> (Populates)
        row.innerHTML = `
    <td>${formatDate(order.timestamp)}</td>
    <td>${order.qty}</td>
    <td>${order.size}</td>
    <td>${order.totalPrice}</td>
    <td>
        <button class="edit-btn" data-id="${order.id}">Edit</button>
        <button class="delete-btn" data-id="${order.id}">Delete</button>
    </td>
    `;

        //Append
        orderTableBody.appendChild(row);
    }

};