document.addEventListener("DOMContentLoaded", () => {
    // Function to update the SKU dynamically based on selected size
    function updateSKU() {
        let size = document.getElementById('size').value;
        document.querySelector('.sku').textContent = `SKU: 100${size}`;
    }

    // Function to handle quantity changes
    function changeQuantity(change) {
        let quantityInput = document.getElementById('quantity');
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity + change > 0) {
            quantityInput.value = currentQuantity + change;
        }
    }

    // Event Listeners
    document.getElementById("size").addEventListener("change", updateSKU);
    document.querySelector(".quantity button:first-child").addEventListener("click", () => changeQuantity(-1));
    document.querySelector(".quantity button:last-child").addEventListener("click", () => changeQuantity(1));
});
