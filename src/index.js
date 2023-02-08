// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let quantity = product.querySelector('.quantity input').value
  let unitPrice = product.querySelector('.price span').textContent
  let productTotal = quantity * unitPrice
  product.querySelector('.subtotal span').textContent = productTotal
  return productTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0
  document.querySelectorAll('.product').forEach(curProduct => {
    total += updateSubtotal(curProduct)
  })


  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove()
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let createProductValues = document.querySelectorAll('.create-product input')
  let productName = createProductValues[0].value
  if(productName != ''*productName.length){
    let productUnitPrice = createProductValues[1].value
    let newProduct = document.createElement('tr')
    newProduct.innerHTML = 
    `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productUnitPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
    `
    newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)
    newProduct.classList.add('product')
    document.querySelector('tbody').append(newProduct)
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove')
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct)
  })
  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)
});
