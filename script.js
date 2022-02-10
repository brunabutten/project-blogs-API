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

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  /* REQUISITO 02 */
  /* const addCarrinho = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addCarrinho.addEventListener('click', createCart);
  section.appendChild(addCarrinho); */
  const item = document.querySelector('.items');
  item.appendChild(section);
  return section;
} 

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui

}
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

/* REQUISITO 05: Some o valor total dos itens do carrinho de compras */
/* function somaPreco() {
  let somaPrecos = 0;
  for (let index = 0; index < listProducts.length; index += 1) {
    somaPrecos += listProducts[index].price;
  }
  document.querySelector('.total-price').innerText = parseFloat(somaPrecos);
} */

/* REQUISITO 03: https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array */
// function cartItemClickListener(event) {
  /* 2 posição do classList */
  // console.log(event.target.classList[1]);
  /* Req 5 soma */
  /* const sku = event.target.classList[1];
  const indexProd = listProducts.findIndex((product) => product.id === sku);
  if (indexProd > -1) {
    listProducts.splice(indexProd, 1);
  } */
  /* Salva a lista atual no localStorage */
  /* saveCartItems(JSON.stringify(listProducts));
  somaPreco();
  event.target.remove();
} */

/* function createCartItemElement(product) {
  const li = document.createElement('li'); */
  /* REQUISITO 05: Some o valor total dos itens do carrinho de compras */
 /*  li.className = `cart__item  ${product.id}`;
  li.innerText = `SKU: ${product.id} | NAME: ${product.name} | PRICE: $${product.price}`;
  li.addEventListener('click', cartItemClickListener);
  listCart.appendChild(li);
} */

/* REQUISITO 02: Adicione o produto ao carrinho de compras */
/* async function createCart(element) {
  const produtoSku = element.target.parentElement.firstChild.innerText;
  const product = await fetchItem(produtoSku);
  const lightProduct = {
    id: product.id,
    name: product.title,
    price: product.price,
  };
  createCartItemElement(lightProduct);
  listProducts.push(lightProduct); */
  /* REQUISITO 04: Carregue o carrinho de compras através do LocalStorage ao iniciar a página */
  // saveCartItems(JSON.stringify(listProducts));
  /* REQUISITO 05: Some o valor total dos itens do carrinho de compras */
  // somaPreco();
// }

/* REQUISITO 07: Adicione um texto de "carregando" durante uma requisição à API */
/* function textLoader() {
  document.querySelector('.loading').innerText = 'carregando...';
} */

/* REQUISITO 01: Crie uma listagem de produtos */
/* async function createItem() {
  textLoader();
  const response = await fetchProducts('computador');
  const item = document.querySelector('.items');
  document.querySelector('.loading').remove();
  response.forEach((current) => {
    item.appendChild(createProductItemElement(current));
  });
} */

/* REQUISITO 04 */
/* function meuLocal() {
  const salvaProduto = JSON.parse(getSavedCartItems()) || [];
  salvaProduto.forEach(createCartItemElement);
} */

/* REQUISITO 06: Implemente a lógica no botão Esvaziar carrinho para limpar o carrinho de compras */
/* function buttonClear() {
  buttonClear1 = document.querySelector('.empty-cart');
  buttonClear1.addEventListener('click', () => {
    document.querySelector('.cart__items').innerHTML = '';
    window.localStorage.clear();
    document.querySelector('.total-price').innerText = '';
  }); */

// window.onload = () => {
/*   createItem();
  meuLocal();
  somaPreco();
  buttonClear(); */
// };

window.onload = () => {
  fetchProducts('computador').then((data) => {
    data.forEach((e) => {
      const product = {
        id: e.id,
        title: e.title,
        thumbnail: e.thumbnail,
      };
      createProductItemElement(product);
    });
  });
};