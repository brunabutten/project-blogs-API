/* PARTE 04 */
const listaCarrinho = document.querySelector('.cart__items');
/* PARTE 05 */
const classePreco = '.total-price';
/* PARTE 06 */
const removeItens = document.querySelector('.empty-cart');
/* PARTE 07 */
const loading = document.querySelector('.loading');

const defineTwo = () => {
  const listValor = document.querySelectorAll('.cart__item');
  const x = [];
  listValor.forEach((e) => x.push(e.textContent));
  saveCartItems(x);
};

const pegaValor = (comp, adic) => {
  const local = getSavedCartItems();
  const a = JSON.parse(local);
  if (a !== null && a !== undefined) {
    a.forEach((e) => {
      const li = document.createElement('li');
      li.className = 'cart__item';
      li.innerText = e;
      li.addEventListener('click', adic);
      comp.appendChild(li);
    });
  }
};

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

/* PARTE 06 */
removeItens.addEventListener('click', () => {
  listaCarrinho.innerHTML = '';
  const price = document.querySelector(classePreco);
  price.innerHTML = 0;
  defineTwo();
});

/* PARTE 02 */
const createObj = (item) => {
  const x = {
    id: item.id,
    title: item.title,
    thumbnail: item.thumbnail,
    price: item.price,
  };
  return x;
};

/* PARTE 05 */
/* https://www.javascripttutorial.net/javascript-string-slice/ */
function menorPreco(itemX) {
  const totalPreco = (document.querySelector(classePreco));
  let totalPrecoNum = parseFloat(totalPreco.innerText);
  const text = itemX.innerText;
  const price = text.slice(text.indexOf('PRICE: $') + 'PRICE: $'.length);
  const priceNum = parseFloat(price);
  totalPrecoNum -= priceNum;
  totalPreco.innerText = totalPrecoNum;
  localStorage.setItem('totalPriceCart', totalPreco.innerText);
}

/* PARTE 03 */
function cartItemClickListener(event) {
  /* PARTE 05 */
  menorPreco(event.target);
  event.target.remove();
  /* PARTE 04 */
  defineTwo();
}

/* PARTE 07 */
function fimLoading() {
  loading.remove();
}

/* PARTE 04 */
async function addList(id, xx) {
  const x = await fetchItem(id);
  const z = createObj(x);
  xx(z);
  defineTwo();
}

/* PARTE 05 */
function somaPreco(precoItem) {
  const totalPreco = (document.querySelector(classePreco));
  let totalPrecoNum = parseFloat(totalPreco.innerText);
  const itemPreco = parseFloat(precoItem);
  totalPrecoNum += itemPreco;
  totalPreco.innerText = totalPrecoNum;
  localStorage.setItem('totalPriceCart', totalPreco.innerText);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  /* PARTE 05 */
  somaPreco(salePrice);
  /* const cart = document.querySelector('.cart__items');
  cart.appendChild(li); */
  /* PARTE 04 */
  listaCarrinho.appendChild(li);
  return li;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  /* PARTE 02 */
  const addCarrinho = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addCarrinho.addEventListener('click', async () => {
    /* PARTE 04 */
    await addList(sku, createCartItemElement);
  });
  section.appendChild(addCarrinho);

  const item = document.querySelector('.items');
  item.appendChild(section);
  return section;
}

function precoSalvo() {
  const tamCart = localStorage.getItem('cartItems');
  const totalPreco = document.querySelector(classePreco);
  if (tamCart !== null) {
    if (tamCart.length > 2) {
      const precoSalvo2 = localStorage.getItem('totalPriceCart');
      totalPreco.innerText = precoSalvo2;
    } else {
      totalPreco.innerText = 0;
    }
  }
}

window.onload = () => {
  fetchProducts('computador').then((data) => {
    /* PARTE 07 */
    fimLoading();
    data.results.forEach((e) => {
      /* PARTE 02 */
      const product = createObj(e);
      createProductItemElement(product);
    });
  });
  /* PARTE 04 */
  pegaValor(listaCarrinho, cartItemClickListener);
  precoSalvo();
};