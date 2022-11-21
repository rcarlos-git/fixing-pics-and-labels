const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/elogo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Fashion</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Electronics</li>
                <li><a href="#" class="footer-link">Smart Phones</a></li>
                <li><a href="#" class="footer-link">TV's</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">Home</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Sports</li>
                <li><a href="#" class="footer-link">Smart Phones</a></li>
                <li><a href="#" class="footer-link">TV's</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">Home</a></li>
            </ul>
            </div>
    </div>
    <p class="footer-title">We are a E-Commernce company that sells many good online thru our website</p>
    <p class="info">We have the best goods, at the lowest prices!! buy or else!</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">Location - William Paterson University</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();
