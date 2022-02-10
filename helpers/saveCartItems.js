/* PARTE 04 */

const saveCartItems = (valor) => {
  localStorage.setItem('cartItems', JSON.stringify(valor));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
