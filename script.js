const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hambuergerButton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIconMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
hambuergerButton.addEventListener("click", toggleMobileMenu);
cartIconMenu.addEventListener("click", toggleCartMenu);

function toggleDesktopMenu(){
    const isCartMenuOpen = !aside.classList.contains("inactive");

    if(isCartMenuOpen){
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isCartMenuOpen = !aside.classList.contains("inactive");

    //Si el menú del carrito está abierto, se cierra para abrir el mobileMenu
    if(isCartMenuOpen){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCartMenu(){
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    const isDesktopMenuOpen =!desktopMenu.classList.contains("inactive"); 

    //Si el mobileMenu está abierto, se cierra para abrir el menú del carrito.
    if(isMobileMenuOpen || isDesktopMenuOpen){
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: "Computer",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "TV Screen",
    price: 459,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(productArray){
    for(product of productArray){
        cardsContainer.classList.add("cards-container");
    
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
        const ProductInfoFigureImg = document.createElement("img");
        ProductInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.append(ProductInfoFigureImg);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        
        cardsContainer.append(productCard);   
    
    }
}

renderProducts(productList);