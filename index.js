document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".product img").forEach(img => {
        img.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const productId = product.dataset.id;
            window.location.href = `product-page.html?id=${productId}`;
        });
    });
});