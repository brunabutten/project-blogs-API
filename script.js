/* https://www.youtube.com/watch?v=De5np8phQxo&t=2422s */
const listCart = document.querySelector('.cart__items');
const listProducts = JSON.parse(getSavedCartItems()) || [];
/* Converte string para objeto */

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

/* REQUISITO 05: Some o valor total dos itens do carrinho de compras */
function somaPreco() {
  let somaPrecos = 0;
  for (let index = 0; index < listProducts.length; index += 1) {
    somaPrecos += listProducts[index].price;
  }
  document.querySelector('.total-price').innerText = parseFloat(somaPrecos);
}

/* REQUISITO 03: https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array */
function cartItemClickListener(event) {
  /* 2 posição do classList */
  console.log(event.target.classList[1]);
  /* Req 5 soma */
  const sku = event.target.classList[1];
  const indexProd = listProducts.findIndex((product) => product.id === sku);
  if (indexProd > -1) {
    listProducts.splice(indexProduct, 1);
  }
  /* Salva a lista atual no localStorage */
  saveCartItems(JSON.stringify(listProducts));
  somaPreco();
  event.target.remove();
}

function createCartItemElement(product) {
  const li = document.createElement('li');
  /* REQUISITO 05: Some o valor total dos itens do carrinho de compras */
  li.className = `cart__item ${product.id}`;
  li.innerText = `SKU: ${product.id} | NAME: ${product.name} | PRICE: $${product.price}`;
  li.addEventListener('click', cartItemClickListener);
  listCart.appendChild(li);
}

/* REQUISITO 02: Adicione o produto ao carrinho de compras */
async function createCart(element) {
  const produto = element.target.parentElement.firstChild.innerText;
  const product = await fetchItem(produto);
  const lightProduct = {
    id: product.id,
    name: product.title,
    price: product.price,
  };
  createCartItemElement(lightProduct);
  listProducts.push(lightProduct);
  /* REQUISITO 04: Carregue o carrinho de compras através do LocalStorage ao iniciar a página */
  saveCartItems(JSON.stringify(listProducts));
  /* REQUISITO 05: Some o valor total dos itens do carrinho de compras */
  somaPreco();
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  /* REQUISITO 02: Adicione o produto ao carrinho de compras */
  const addCarrinho = createCustomElement('button', 'item__add', 'Adicionar ao carrinho');
  addCarrinho.addEventListener('click', createCart);
  section.appendChild(addCarrinho);
  /* section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!')); */
  return section;
}

/* REQUISITO 07: Adicione um texto de "carregando" durante uma requisição à API */
function textLoader() {
  document.querySelector('.loading').innerText = 'carregando...';
}

/* REQUISITO 01: Crie uma listagem de produtos */
async function createItem() {
  textLoader();
  const response = await fetchProducts('computador');
  const item = document.querySelector('.items');
  document.querySelector('.loading').remove();
  response.forEach((current) => {
    item.appendChild(createProductItemElement(current));
  });
}

/* REQUISITO 04 */
function meuLocal() {
  const salvaProduto = JSON.parse(getSavedCartItems()) || [];
  salvaProduto.forEach(createCartItemElement);
}

/* REQUISITO 06: Implemente a lógica no botão Esvaziar carrinho para limpar o carrinho de compras */
function buttonClear() {
  buttonClear1 = document.querySelector('.empty-cart');
  buttonClear1.addEventListener('click', () => {
    document.querySelector('.cart__items').innerHTML = '';
    window.localStorage.clear();
    document.querySelector('.total-price').innerText = '';
  });
}

window.onload = () => {
  createCart();
  createItem();
  meuLocal();
  somaPreco();
  buttonClear();
};
