require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

/* REQUISITO 09 */
describe('2 - Teste a função fecthItem', () => {
  it('1. Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  });

  it('2. Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', () => {
    fetchItem('MLB1615760527').toBeCalled();
  });

  it('3. Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('4. Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo', () => {
    fetchItem('MLB1615760527').then((data) => {
      expect(data).toEqual(item);
    })
  });

  it('5. Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', () => {
    expect(() => fetchItem()).toThrow('You must provide an url');
  });
});
