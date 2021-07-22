const product = document.querySelector("#product-name")
const price = document.querySelector("#product-price")
const button = document.querySelector("#btn")
const buttonRemoveAll = document.querySelector("#btn-remove")
const products = document.querySelector(".container-products")
const productName = document.querySelector(".product")
const priceItems = document.querySelector(".price")
const totalItems = document.querySelector(".total-items")
const sumTotalPrice = document.querySelector(".amount-items")
const displayTotalItemsAndPrice = document.querySelector(".display-status")
let productsItems = []



function addItem(){
    let itemName = product.value
    let itemPrice = price.value

    productsItems.push({name:`${itemName}`, price:`${itemPrice}`})
}



function updateItemsOnDisplay(){

    products.innerHTML = ""

    productsItems.forEach(items => {


        let div = document.createElement('div')
        div.classList.add('products')

            div.innerHTML = `
                
                <div class="list flex-space">
                    <div class="product medium-font">${items.name}</div>
                    <div class="price green-color medium-font">R$${items.price}</div>
                </div>
                
            `
        products.append(div)
    })
}


function clearInputs() {
    product.value = ""
    price.value = ""
}



function showTotalItemsAndPrice() {

    let totalPrice = 0

    productsItems.forEach(priceItem => {

        totalPrice = totalPrice + parseFloat(priceItem.price)
    })

    totalItems.innerHTML = `Total Itens <span style="color: orange;">${productsItems.length}</span>`
    sumTotalPrice.innerHTML = `Valor Total <span style="color: #43a059;">R$ ${totalPrice}</span> `
}



button.addEventListener("click", function () {

    if(product.value === "" || price.value === ""){
        alert("Digite o nome do produto e o valor!")
    }else{
        addItem()
        clearInputs()
        showTotalItemsAndPrice()
        updateItemsOnDisplay()
    }
    
   
    
    
})

buttonRemoveAll.addEventListener("click", function(){
    productsItems = []
    updateItemsOnDisplay()
    showTotalItemsAndPrice()
})

