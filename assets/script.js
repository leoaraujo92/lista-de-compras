const product = document.querySelector("#product-name")
const price = document.querySelector("#product-price")
const button = document.querySelector("#btn")
const products = document.querySelector(".container-products")
const productName = document.querySelectorAll(".product")
const priceItems = document.querySelectorAll(".price")
const totalItems = document.querySelector(".total-items")
const sumTotalPrice = document.querySelector(".amount-items")
const productsItems = [{
    name: "Arroz integral",
    price: 6.99
}, {
    name: "Feijão broto legal",
    price: 9.99
}, {
    name: "Miojo de carne",
    price: 1.80
},{
    name: "Agua mineral",
    price: 1.55
},{
    name: "Peito de frango s/ osso 1kg",
    price: 13.99
}]




productsItems.forEach(items => {
    console.log(items.name, items.price)

    let div = document.createElement('div')
    div.classList.add('products')

    div.innerHTML = `
        
        <div class="list flex-space shadow">
            <div class="product medium-font">${items.name}</div>
            <div class="price green-color medium-font">${items.price}</div>
        </div>
        <div class="del-item hand">X</div>
        
        `
    products.append(div)
})


function clearInputs() {
    product.value = ""
    price.value = ""
}



function displayStatus() {

    let totalPrice = 0

    productsItems.forEach(priceItem => {

        totalPrice = totalPrice + priceItem.price
    })

    totalItems.innerHTML = `Total Itens ${productsItems.length}`
    sumTotalPrice.innerHTML = `Valor Total R$ ${totalPrice.toFixed(2)} `
}



button.addEventListener("click", function () {

    displayStatus()
    clearInputs()
})


