const saveCartItems = require('../helpers/saveCartItems');

/* PARTE 10 */
localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('1. Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('2. Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    const argum = '<ol><li>Item</li></ol>'
    saveCartItems(argum);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', argum);
  });
});
