const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/elogo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="Fashion.html" class="link">Fashion</a></li>
            <li class="link-item"><a href="Electronics.html" class="link">Electronics</a></li>
            <li class="link-item"><a href="Sports.html" class="link">Sports</a></li>
            <li class="link-item"><a href="Accessories.html" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();
