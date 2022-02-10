/* PARTE 04 */
const cartList = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

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

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

/* PARTE 03 */
function cartItemClickListener(event) {
  event.target.remove();
  /* PARTE 04 */
  saveCartItems();
}

/* PARTE 04 */
async function addList(id, xx) {
  const x = await fetchItem(id);
  const z = createObj(x);
  xx(z);
  saveCartItems();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  /* const cart = document.querySelector('.cart__items');
  cart.appendChild(li); */
  /* PARTE 04 */
  cartList.appendChild(li);
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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

window.onload = () => {
  fetchProducts('computador').then((data) => {
    data.forEach((e) => {
      /* PARTE 02 */
      const product = createObj(e);
      createProductItemElement(product);
    });
  });
  /* PARTE 04 */
  getSavedCartItems(cartList, cartItemClickListener);
};