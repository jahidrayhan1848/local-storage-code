const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value=''
    // console.log(product, quantity)
    displayProduct(product, quantity);
    savedToLocalStorage(product,quantity)
    
}
const displayProduct = (product,quantity) => {
    const ulContainer = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ulContainer.appendChild(li);   
}
const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
       cart=JSON.parse(storedCart)
    }
    return cart;
  }

const savedToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const storeStringified = JSON.stringify(cart)
     localStorage.setItem('cart', storeStringified)

    
}
const displayFromLocalStorage = () => {
    const cart = getStoredShoppingCart();
    console.log(cart);
    for (const product in cart) {
        const quantity=cart[product]
        // console.log(product,quantity);
        displayProduct(product,quantity)
        
    }

}
displayFromLocalStorage()