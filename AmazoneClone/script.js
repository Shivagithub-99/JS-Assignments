const products = [
    // Electronics
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 79.99,
        image: 'https://pixabay.com/get/gacad4274efee8d65b5b29e7947a91519418addf87547072b488a8120ba05834a5f25c6cc8a97ce17e418a87c3d93466995b1c753a49e443c30d3ff5c8ec9e8b0_1280.jpg',
        category: 'electronics',
        rating: 4.5,
        reviews: 1240
    },
    {
        id: 2,
        name: 'Smart Watch with Fitness Tracker',
        price: 199.99,
        image: 'https://pixabay.com/get/ga1c51d426f769d8e0813de247a97fd29f8acfb2479cd5a6997b8e3479c678416de5ad39b36a009336b67f29e494521cfbaf0a9663892c81c519fb896ab40d585_1280.jpg',
        category: 'electronics',
        rating: 4.3,
        reviews: 892
    },
    {
        id: 3,
        name: 'Wireless Gaming Mouse',
        price: 49.99,
        image: 'https://pixabay.com/get/g9dd48577e755ff0051518f8771701669f2ce8d9561dd00b4f206ca3d96cc3df5780bf5d7bb442eb1f05c696411f7aba9a95efa9b5621dc9cdd3211fdd244513c_1280.jpg',
        category: 'electronics',
        rating: 4.7,
        reviews: 567
    },
    {
        id: 4,
        name: 'USB-C Hub with Multiple Ports',
        price: 29.99,
        image: 'https://pixabay.com/get/gca6e020aff2f953f09c083f00997a065f8ed101d28643206a7adfa8dccba29f63766ba60c7f33ab37dfb311eb1692eaffee28054d5591bd07ece4c3370280d65_1280.jpg',
        category: 'electronics',
        rating: 4.4,
        reviews: 723
    },
    {
        id: 5,
        name: 'Wireless Charging Pad',
        price: 24.99,
        image: 'https://pixabay.com/get/g1e000cbd7bf49a59957d64a1e5217c08841a57a626da1cb09b1313ed5ae2319f4ccc37b93962c354e48e5296b1e091b0556e34a52012f75ebb73745220803b27_1280.jpg',
        category: 'electronics',
        rating: 4.2,
        reviews: 445
    },
    {
        id: 6,
        name: 'Portable Bluetooth Speaker',
        price: 89.99,
        image: 'https://pixabay.com/get/ge9d3a4f1bbe85f6802b086fe227a42615ba931c2999a5991a25a24fa096b40e5498d3c05ec04fe71fcaea50fb558b045bcbbfff0938d9592e90e972b4ce790cb_1280.jpg',
        category: 'electronics',
        rating: 4.6,
        reviews: 1056
    },
    {
        id: 7,
        name: 'Webcam HD 1080p',
        price: 39.99,
        image: 'https://pixabay.com/get/ga0c6908a560b573bbff459e787b8f3793153dc9da76523460d19fd12701d090a5fdfada5a943e14808d4274738f7c066ebc76497aa4dc5718c3d788db79a3ad0_1280.jpg',
        category: 'electronics',
        rating: 4.1,
        reviews: 334
    },
    {
        id: 8,
        name: 'Tablet 10.1 inch Android',
        price: 149.99,
        image: 'https://pixabay.com/get/g2811bd3eede64d2a98a74284a1a42b897265e29a6eb7f7db7c37edf79a0aa67924dd05688e6d3696a935f99f81bb16ffffb8f37724b6a790d664eb6e2dbb8690_1280.jpg',
        category: 'electronics',
        rating: 4.3,
        reviews: 789
    },
    
    // Home Appliances
    {
        id: 9,
        name: 'Electric Coffee Maker',
        price: 59.99,
        image: 'https://pixabay.com/get/gdd1779414b82d3fe793d50273f2b0bc74658b3a1077f3f7d47c5d7cf8108bef05e80381337e30a679929eb73bdce4aebb4997c1c592789df72180acd6c83412f_1280.jpg',
        category: 'home',
        rating: 4.4,
        reviews: 612
    },
    {
        id: 10,
        name: 'Stainless Steel Blender',
        price: 129.99,
        image: 'https://pixabay.com/get/gf95bca0c7142212e963044647438dc3a20d05476fdbb4c16e9bf41a60b7bcd23ccde3ef1f3d2e84809d5025dfdc47e72_1280.jpg',
        category: 'home',
        rating: 4.5,
        reviews: 456
    },
    {
        id: 11,
        name: 'Digital Air Fryer',
        price: 89.99,
        image: 'https://pixabay.com/get/gfb68b48472c4eac3c6884835afc6932261ce1a13b4083eaf064d31fccfdd9b374c3606e6a1fb5e07f265d4978b445d1f_1280.jpg',
        category: 'home',
        rating: 4.6,
        reviews: 823
    },
    {
        id: 12,
        name: 'Electric Kettle with Temperature Control',
        price: 45.99,
        image: 'https://pixabay.com/get/g2a83dcf0150b619383e4195bd0cb9774a11c94948dae02ee06381bd1e8217da208f0d56f3d688412b184ce05af83261f_1280.jpg',
        category: 'home',
        rating: 4.3,
        reviews: 367
    },
    {
        id: 13,
        name: 'Stand Mixer with Multiple Attachments',
        price: 249.99,
        image: 'https://pixabay.com/get/gad9f8394f6c795e48995c795bd460cdb4b5178a32580d8e5708f5e844bfa7a34b4c9b70051655a3d8e7758284a347b07f1a6579002bfd2b1899f1c6a173be630_1280.jpg',
        category: 'home',
        rating: 4.7,
        reviews: 945
    },
    {
        id: 14,
        name: 'Food Processor Multi-Function',
        price: 119.99,
        image: 'https://pixabay.com/get/gcacaf63bdee142fec60bbd0f7722f40971cde8728ae10376ed3bb54e4d8dcb1b99865b6259b12fec20600178c5981aa0_1280.jpg',
        category: 'home',
        rating: 4.2,
        reviews: 534
    },
    
    // Books and Media
    {
        id: 15,
        name: 'The Art of Programming',
        price: 34.99,
        image: 'https://pixabay.com/get/gd331005fc89b7ea299bd78beb3b07135f8e385fef905ec269f8a0f8debd35d60c1ef7f8440e1e71b2f83e1466b3970e231cabd9d39ddeb04d1be60ee44bcc5c6_1280.jpg',
        category: 'books',
        rating: 4.8,
        reviews: 1234
    },
    {
        id: 16,
        name: 'Vintage Vinyl Record Collection',
        price: 89.99,
        image: 'https://pixabay.com/get/g14525d888185f78f3e6e4adee878d8238b52bccebe94b0123d9a7aefc258de79f098fa634254160d92cce376e8751acf8a1f132c102586cbf434df0bf6ca087d_1280.jpg',
        category: 'books',
        rating: 4.6,
        reviews: 678
    },
    {
        id: 17,
        name: 'Digital Photography Guide',
        price: 29.99,
        image: 'https://pixabay.com/get/g694d20a4a50a05658b56b55853d5f832b9f51b7ec9d271fc46654a17754bbfb4030ced1c3bcebbabcb30337cfa1570dbd844bc0eeb7c6769e509613c67930be2_1280.jpg',
        category: 'books',
        rating: 4.4,
        reviews: 456
    },
    {
        id: 18,
        name: 'Classic Literature Box Set',
        price: 79.99,
        image: 'https://pixabay.com/get/g8da2586f713d25f7f29e9fab5f7ffc20ac4dbd5e5eb066c6dd6ee1299a3b771a93965b44097eafea30eeded723a3fa0db844c0e1014f458ea5f596faaebabb6a_1280.jpg',
        category: 'books',
        rating: 4.7,
        reviews: 892
    },
    
    // Clothing
    {
        id: 19,
        name: 'Casual Denim Jacket',
        price: 69.99,
        image: 'https://pixabay.com/get/g9f72fd5f87286c60c07bef8bedad48053b1cd609d8a25b5198de2085b000f7143bdaafffee3fab87edc804dfae6e153b0d6350572e3b7c17b96a4812b63274c5_1280.jpg',
        category: 'clothing',
        rating: 4.3,
        reviews: 523
    },
    {
        id: 20,
        name: 'Comfortable Running Shoes',
        price: 99.99,
        image: 'https://pixabay.com/get/g7e6cd6ecfe91a3e22abee350a33be27a7f32e586c23a6d835de9410cedcffb03f65e121b782fa205ecdf135c266e316f4482cc9ac28f48991d497ca35db9e5ed_1280.jpg',
        category: 'clothing',
        rating: 4.5,
        reviews: 756
    },
    {
        id: 21,
        name: 'Cotton T-Shirt Pack (3 pieces)',
        price: 24.99,
        image: 'https://pixabay.com/get/g1cd1ce982abb6c62b7b0902c313c2f3d8376cb49d9e2345dc237bef46d2b5c23d6855519f87992bc5a6cd98c8a539f0625b4a68dd4ef37570b10e40853eb96a8_1280.jpg',
        category: 'clothing',
        rating: 4.1,
        reviews: 334
    },
    {
        id: 22,
        name: 'Winter Wool Sweater',
        price: 54.99,
        image: 'https://pixabay.com/get/g0b5b06f8803f18661d0966750a93be79b2c2a605c29ef02b368bdd8073af14fcc4e8cce156c5e9f73354bbdf81b1c86a7c53277af70a56eee3009bff24a48ca0_1280.jpg',
        category: 'clothing',
        rating: 4.4,
        reviews: 445
    }
];

// Shopping cart array
let cart = JSON.parse(localStorage.getItem('amazonCart')) || [];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.querySelector('.search-input');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavClose = document.getElementById('mobile-nav-close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    updateCartUI();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Cart modal toggle
    cartIcon.addEventListener('click', toggleCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Mobile navigation
    mobileMenuToggle.addEventListener('click', toggleMobileNav);
    mobileNavClose.addEventListener('click', closeMobileNav);
    
    // Search icon click
    document.querySelector('.search-icon').addEventListener('click', performSearch);
    
    // Enter key for search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', handleCheckout);
    
    // Close mobile nav when clicking on links
    document.querySelectorAll('.mobile-nav-content a').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
}

// Render products to the grid
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 20px; color: #ccc;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-prime">
                <i class="fas fa-shipping-fast"></i> FREE delivery
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})" aria-label="Add ${product.name} to cart">
                Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
    showAddToCartFeedback(product.name);
}

// Show feedback when item is added to cart
function showAddToCartFeedback(productName) {
    // Create temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        z-index: 1002;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        Added "${productName}" to cart
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
    renderCartItems();
}

// Update item quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    saveCartToStorage();
    updateCartUI();
    renderCartItems();
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('amazonCart', JSON.stringify(cart));
}

// Update cart UI (count and total)
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2);
    
    // Hide cart count if empty
    if (totalItems === 0) {
        cartCount.style.display = 'none';
    } else {
        cartCount.style.display = 'block';
    }
}

// Toggle cart modal
function toggleCart() {
    cartModal.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartModal.classList.contains('active') ? 'hidden' : '';
    renderCartItems();
}

// Close cart modal
function closeCart() {
    cartModal.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="Remove item">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle filter button clicks
function handleFilterClick(e) {
    const category = e.target.dataset.category;
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter and render products
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    renderProducts(filteredProducts);
    
    // Scroll to products section
    productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Handle search input
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2 && searchTerm.length > 0) return;
    
    performSearchWithTerm(searchTerm);
}

// Perform search
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    performSearchWithTerm(searchTerm);
}

// Perform search with given term
function performSearchWithTerm(searchTerm) {
    if (searchTerm === '') {
        renderProducts(products);
        return;
    }
    
    const searchResults = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(searchResults);
    
    // Reset filter buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    filterButtons[0].classList.add('active'); // "All Products" button
}

// Toggle mobile navigation
function toggleMobileNav() {
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
}

// Close mobile navigation
function closeMobileNav() {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
}

// Handle checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Checkout Summary:\n${itemCount} items\nTotal: $${total.toFixed(2)}\n\nThank you for your order!`);
    
    // Clear cart after checkout
    cart = [];
    saveCartToStorage();
    updateCartUI();
    renderCartItems();
    closeCart();
}

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileNav();
    }
});

// Handle escape key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (cartModal.classList.contains('active')) {
            closeCart();
        }
        if (mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to top functionality
document.querySelector('.foot-panel1 a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Image lazy loading fallback for older browsers
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe images when they are added to the DOM
    const observeImages = () => {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    };
    
    // Initial observation
    setTimeout(observeImages, 100);
}

// Add keyboard navigation support for cart
document.addEventListener('keydown', function(e) {
    if (cartModal.classList.contains('active')) {
        const focusableElements = cartModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }
});

// Performance optimization: debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', debouncedSearch);

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
        e.target.alt = 'Image not available';
    }
}, true);

// console.log('Amazon Clone initialized successfully!');
