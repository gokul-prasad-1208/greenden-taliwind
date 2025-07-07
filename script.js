let burgerbtn = document.querySelector('#burger-menu')
let mobileMenu = document.getElementById('mobileMenu')
let closeMenu = document.getElementById('offer-close')


let productSection = document.getElementById('products_section')
let products = productSection.getElementsByTagName('h3')

let searchBar = document.querySelector('#searchfield')

searchBar.addEventListener("keyup", function () {
    if (event.target.value != '') {
        for (let i = 0; i < products.length; i++) {
            if (products[i].innerText.includes(event.target.value)) {

            } else {
                products[i].parentElement.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            products[i].parentElement.style.display = "block"
        }
    }
})


burgerbtn.addEventListener('click', function () {
    mobileMenu.style.display = "block"
    console.log("heloo")
})

closeMenu.addEventListener('click', function () {
    mobileMenu.style.display = "none"
    console.log("heloo")
})


