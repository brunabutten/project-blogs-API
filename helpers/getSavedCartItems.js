/* REQUISITO 04: Carregue o carrinho de compras através do LocalStorage ao iniciar a página */

const getSavedCartItems = () => localStorage.getItem('cartItems');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
