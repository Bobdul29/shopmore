<script.js>

const cart = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        quantity: 2
    },
    {
        id: 2,
        name: "Product 2",
        price: 9.99,
        quantity: 1
    }
];

// Function to generate cart table rows
function generateCartTableRows() {
    const cartTableBody = document.getElementById("cart-table-body");
    cartTableBody.innerHTML = "";
    cart.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${item.price * item.quantity}</td>
        `;
        cartTableBody.appendChild(row);
    });
}

// Function to calculate cart summary
function calculateCartSummary() {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = 0; // Assuming 0% tax
    const total = subtotal + tax;
    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}

// Generate cart table rows and calculate cart summary
generateCartTableRows();
calculate

 </script.js>
