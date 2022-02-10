/* PARTE 04 */

const saveCartItems = (valor) => {
  localStorage.setItem('cartItems', valor);
  const listValor = document.querySelectorAll('.cart__item');
  const x = [];
  listValor.forEach((e) => {
    x.push(e.textContent);
  });
  localStorage.setItem('two', JSON.stringify(x));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
