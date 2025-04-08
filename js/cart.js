// Shared cart functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart from localStorage or empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add to Cart function
    function addToCart(product) {
        // Check if product already exists in cart
        const existingItem = cart.find(item => item.name === product.name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count display
        updateCartCount();
        
        // Show confirmation
        alert(`${product.name} added to cart!`);
    }

    // Connect "Add to Cart" buttons
    function setupCartButtons() {
        document.querySelectorAll('.product-card button').forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const product = {
                    id: productCard.dataset.productId || Date.now().toString(),
                    name: productCard.querySelector('h3').textContent,
                    price: productCard.querySelector('.price').textContent,
                    image: productCard.querySelector('img').src
                };
                addToCart(product);
            });
        });
    }

    // Update cart count in navbar
    function updateCartCount() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartLink = document.querySelector('a[href="cart.html"]');
        if (cartLink) {
            cartLink.innerHTML = `Cart (${cartCount})`;
        }
    }

    // Make cart accessible globally
    window.getCart = function() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    };

    // Initialize cart functionality
    setupCartButtons();
    updateCartCount();
});
