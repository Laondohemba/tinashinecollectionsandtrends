// function to get product url, cost and send message to whatsapp
// product = argument for image url to be defined and passed for each product
// cost = price of the product to be defined and passed for each product

let buyNow = function(product, cost){
    let message = "Hi Tina, I want to buy this item below. kindly send me your account details."
    let url = "https://wa.me/+2347061026328?text=" 
    + message + "%0a"
    + "Cost = " + cost.innerHTML + "%0a" + "%0a" 
    + product.src;

    return window.open(url, "_blank").focus();
}
// product 1
let product1 = document.getElementById("product1");
let cost1 = document.getElementById("price1");

document.getElementById("buy_now_btn1").addEventListener("click", function(){
    buyNow(product1, cost1);
})


// product 2
let product2 = document.getElementById("product2");
let cost2 = document.getElementById("price2");

document.getElementById("buy_now_btn2").addEventListener("click", function(){
    buyNow(product2, cost2);
})

// product 3
let product3 = document.getElementById("product3");
let cost3 = document.getElementById("price3");

document.getElementById("buy_now_btn3").addEventListener("click", function(){
    buyNow(product3, cost3);
})

// product 4
let product4 = document.getElementById("product4");
let cost4 = document.getElementById("price4");

document.getElementById("buy_now_btn4").addEventListener("click", function(){
    buyNow(product4, cost4);
})

// product 5
let product5 = document.getElementById("product5");
let cost5 = document.getElementById("price5");

document.getElementById("buy_now_btn5").addEventListener("click", function(){
    buyNow(product5, cost5);
})

// product 6
let product6 = document.getElementById("product6");
let cost6 = document.getElementById("price6");

document.getElementById("buy_now_btn6").addEventListener("click", function(){
    buyNow(product6, cost6);
})

// product 7
let product7 = document.getElementById("product7");
let cost7 = document.getElementById("price7");

document.getElementById("buy_now_btn7").addEventListener("click", function(){
    buyNow(product7, cost7);
});

// product 8
let product8 = document.getElementById("product8");
let cost8 = document.getElementById("price8");

document.getElementById("buy_now_btn8").addEventListener("click", function(){
    buyNow(product8, cost8);
});

// product 9
let product9 = document.getElementById("product9");
let cost9 = document.getElementById("price9");

document.getElementById("buy_now_btn9").addEventListener("click", function(){
    buyNow(product9, cost9);
});

// product 10
let product10 = document.getElementById("product10");
let cost10 = document.getElementById("price10");

document.getElementById("buy_now_btn10").addEventListener("click", function(){
    buyNow(product10, cost10);
});

// product 11
let product11 = document.getElementById("product11");
let cost11 = document.getElementById("price11");

document.getElementById("buy_now_btn11").addEventListener("click", function(){
    buyNow(product11, cost11);
});

// product 12
let product12 = document.getElementById("product12");
let cost12 = document.getElementById("price12");

document.getElementById("buy_now_btn12").addEventListener("click", function(){
    buyNow(product12, cost12);
});



// unisex wears button

document.getElementById("unisex_btn").addEventListener("click", function(){
    location.href = "unisex_wears.html";
});

// beddings button
document.getElementById("beddings_btn").addEventListener("click", function(){
    location.href = "beddings.html";
});
// home

document.getElementById("home").addEventListener("click", function(){
    location.href = "tina_shine.html";
});
