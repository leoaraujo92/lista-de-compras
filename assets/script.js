let product = document.querySelector("#product-name")
let price = document.querySelector("#product-price")
let button = document.querySelector("#btn")
let items = document.querySelectorAll(".products")
let productName = document.querySelectorAll(".product")
let priceItems = document.querySelectorAll(".price")
let totalItems = document.querySelector(".total-items")
let sumPriceItems = document.querySelector(".amount-items")



function clearInputs(){
    product.value = ""
    price.value = ""
}

function displayStatus(){

    let totalSum = 0
    for(let i = 0; i < priceItems.length; i++){

        let stringToFloat = parseFloat(priceItems[i].innerHTML)
        let priceItem = stringToFloat

        totalSum = totalSum + priceItem
    }

    totalItems.innerHTML = `Total Items ${items.length}`
    sumPriceItems.innerHTML = `Valor Total R$ ${totalSum.toFixed(2)} `
}


button.addEventListener("click", function(){
  
    displayStatus()
    clearInputs()

})


