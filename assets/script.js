const product = document.querySelector("#product-name")
const price = document.querySelector("#product-price")
const button = document.querySelector("#btn")
const buttonRemoveAll = document.querySelector("#btn-remove")
const products = document.querySelector(".container-products")
const productName = document.querySelector(".product")
const priceItems = document.querySelector(".price")
const totalItems = document.querySelector(".total-items")
const sumTotalPrice = document.querySelector(".amount-items")
let productsItems = []



function addItem(){
    let itemName = product.value
    let itemPrice = price.value

    console.log("Nome do produto: " + itemName + " Valor do Produto: " + itemPrice)
    productsItems.push({name:`${itemName}`, price:`${itemPrice}`})
}



function updateItemsOnDisplay(){

    products.innerHTML = ""

    productsItems.forEach(items => {


        let div = document.createElement('div')
        div.classList.add('products')

            div.innerHTML = `
                
                <div class="list flex-space shadow">
                    <div class="product medium-font">${items.name}</div>
                    <div class="price green-color medium-font">R$${items.price}</div>
                </div>
                <div class="del-item hand">X</div>
                
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

    totalItems.innerHTML = `Total Itens ${productsItems.length}`
    sumTotalPrice.innerHTML = `Valor Total R$ ${totalPrice} `
}



button.addEventListener("click", function () {

    
    addItem()
    clearInputs()
    showTotalItemsAndPrice()
    updateItemsOnDisplay()
    
    
})

buttonRemoveAll.addEventListener("click", function(){
    productsItems = []
    updateItemsOnDisplay()
    showTotalItemsAndPrice()
})

