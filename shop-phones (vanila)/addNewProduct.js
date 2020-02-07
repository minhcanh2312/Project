const nameInput = document.querySelector('input[name="phoneName"]')
const typeInput = document.querySelector('input[name="phoneType"]')
const priceInput = document.querySelector('input[name="phonePrice"]')
const addNewBtn = document.querySelector('.addNew')
addNewBtn.addEventListener('click', onAddClick)

function onAddClick(event) {

    event.preventDefault()
    const product = {
        id: Math.random,
        name: nameInput.value,
        type: typeInput.value,
        price: priceInput.value,
    }
    if (!isValidProduct(product)) {
        alert('please enter valid data')
        return
    }
    addNewProduct(product)
    clearForm()
    nameInput.focus()
}

function isValidProduct(product) {
    let result = product.name && product.type && product.price
    return result
}

function clearForm() {
    nameInput.value = ''
    typeInput.value = ''
    priceInput.value = ''
}

function addNewProduct(product) {
    const { type, name, price, id } = product
    const template = `
  <div
    class="product"
    data-id="${id}"
    data-price="${price}"
    data-type="${type}"
  >
    <h3>${name}</h3>
    <span>${price}</span>
  </div>
  `
    const newProduct = createEl(template)
    const contentEl = document.querySelector('.content')
    contentEl.appendChild(newProduct)
}

function createEl(str) {
    const div = document.createElement('div')
    div.innerHTML = str.trim()
    return div.firstChild
}