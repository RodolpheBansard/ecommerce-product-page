const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");

const articleImage = document.querySelector(".article-image");

const quantity = document.querySelector(".label-quantity");
quantity.value = 0;
quantity.innerHTML = 0;
const cartArticleNumber = document.querySelector(".cart-article-number");
cartArticleNumber.value = 0;
cartArticleNumber.innerHTML = 0;

let currentImageIndex=0;
let articlePrice = 150;
let articleQuantity = 0;
let cartItems = []

function toggleMenu(){
    hamburgerMenu.classList.toggle("active");
    overlay.classList.toggle("active");
}

function changeImage(value){
    articleImage.src = "images/image-product-" + value + ".jpg";
}

function addItemToCart(){
    if(quantity.value>0){
        cartItems.push(
            {
                article:articlePrice,
                qauntity:quantity.value
            }
        );
        cartArticleNumber.value = cartArticleNumber.value + 1;
        cartArticleNumber.innerHTML = cartArticleNumber.value;
    }
    
}

function increment(){
    quantity.value = quantity.value + 1;
    quantity.innerHTML = quantity.value;
}

function decrement(){
    if(quantity.value > 0){
        quantity.value = quantity.value - 1;
        quantity.innerHTML = quantity.value;
    }    
}