// filter products
const filterButtons = Array.from(
    document.querySelectorAll('.filterBtn')
)
const filterSelect = document.querySelector('#priceFilter')
let filter = {
    types: { android: true, iPhone: true },
    price: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
    },
}

filterButtons.forEach(bindClickEvent)
filterSelect.addEventListener('change', handlePriceFilterChange)

function bindClickEvent(el) {
    el.addEventListener('click', handleFilterButtonClick)
}

function handlePriceFilterChange(e) {
    if (e.target.value === 'all') {
        filter.price.min = 0
        filter.price.max = Number.MAX_SAFE_INTEGER
        renderFilteredProduct()
        return
    }
    const min = Number(e.target.value.split('-')[0])
    const max = Number(e.target.value.split('-')[1])
    if (isNaN(min) || isNaN(max)) {
        e.preventDefault()
        return
    }
    filter.price.min = min
    filter.price.max = max
    renderFilteredProduct()
}

function handleFilterButtonClick(e) {
    const targetEl = e.target
    const filterType = targetEl.getAttribute('data-type')
    const typeHandlerFilter = {
        showIphone: toggleFilterIphone,
        showAndroid: toggleFilterAndroid,
    }
    const handler = typeHandlerFilter[filterType]
    if (!handler) return
    targetEl.classList.toggle('active')
    const isActive = targetEl.classList.contains('active')
    handler(isActive)
    renderFilteredProduct()
}

function toggleFilterIphone(isActive) {
    filter.types.iPhone = isActive
}

function toggleFilterAndroid(isActive) {
    filter.types.android = isActive
}

function renderFilteredProduct() {
    const products = Array.from(document.querySelectorAll('.product'))
    const shouldHideProducts = products.filter(product => {
        const typeMapper = {
            xiaomi: 'android',
            samsung: 'android',
            bphone: 'android',
            iPhone: 'iPhone',
        }
        const type = product.getAttribute('data-type')
        const price = Number(product.getAttribute('data-price'))
        products.forEach(showIt)
        return (!filter.types[typeMapper[type]] ||
            price < filter.price.min ||
            price > filter.price.max
        )
    })
    shouldHideProducts.forEach(hideIt)

    function hideIt(element) {
        element.classList.add('hide')
    }

    function showIt(element) {
        element.classList.remove('hide')
    }
}

renderFilteredProduct()

// add new product

// const addNewBtn = document.querySelector('.addNew')
// addNewBtn.addEventListener('click', onAddClick)

// function onAddClick(event) {
//     const nameInput = document.querySelector('input[name="phoneName"]')
//     const typeInput = document.querySelector('input[name="phoneType"]')
//     const priceInput = document.querySelector('input[name="phonePrice"]')
//     event.preventDefault() //Khong co refresh on submit
//     const product = {
//         id: new Date().getTime(), //tra ve 1 so la miliseconds tinh tu 1-1-1970
//         name: nameInput.value, //Lay gia tri tu input co name="phoneName"
//         type: typeInput.value,
//         price: priceInput.value,
//     }
//     if (!isValidProduct(product)) {
//         alert('please enter valid data')
//         return
//     }
//     addNewProduct(product)
//     clearForm()
//     nameInput.focus()
// }

// function isValidProduct(product) {
//     let result = product.name && product.type && product.price
//     return result
// }

// function clearForm() {
//     nameInput.value = ''
//     typeInput.value = ''
//     priceInput.value = ''
// }

// function addNewProduct(product) {
//     const { type, name, price, id } = product // tuong duong voi code o dong 37 - 40
//     // const type = product.type
//     // const name = product.name
//     // const price = product.price
//     // const id= product.id
//     const template = `
//   <div
//     class="product"
//     data-id="${id}"
//     data-price="${price}"
//     data-type="${type}"
//   >
//     <h3>${name}</h3>
//     <span>${price}</span>
//   </div>
//   `
//     const newProduct = createEl(template) // tao 1 html element tu 1 string
//     const contentEl = document.querySelector('.content')
//     contentEl.appendChild(newProduct)
// }

// function createEl(str) {
//     const div = document.createElement('div') // tao ra 1 the div
//         /** div = 
//           <div></div>
//          */
//     div.innerHTML = str.trim() //gan innerHTML = str
//         /** div =
//           <div>
//             <div
//               class="product"
//               data-id="${id}"
//               data-price="${price}"
//               data-type="${type}"
//             >
//               <h3>${name}</h3>
//               <span>${price}</span>
//             </div>
//           </div>
//          */
//     return div.firstChild // tra ve firstChild, tra ve div co class product
// }