require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

/* REQUISITO 08 */

describe('1 - Teste a função fecthProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador').toBeCalled();
  });

  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const endpoint = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    await fetchProducts('computador');
  });

  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async () => {
    const response1 = await fetchProducts('computador');
    expect(response1).toEqual(computadorSearch);
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const response2 = await fetchProducts();
    expect(response2).toBeEqual(new Error('You must provide an url'));
  });
});
