/* REQUISITO 04: Carregue o carrinho de compras através do LocalStorage ao iniciar a página */
const saveCartItems = (valor) => {
  localStorage.setItem('cartItems', valor);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
