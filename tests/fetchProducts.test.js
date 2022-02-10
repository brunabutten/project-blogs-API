require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Testa se realmente é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Testa se "fetchProducts" com o argumento "computador" chama "fetch"', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se ao chamar a função fetchProducts com o argumento "computador" retorna uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const resp = await fetchProducts('computador');
    const expected = computadorSearch;
    expect(response).toEqual(expected);
  });

  it('Testa se ao chamar função "fetchProducts" com o argumento "computador" a função "fetch" utiliza o endpoint correto "https://api.mercadolibre.com/sites/MLB/search?q=computador"', () => {
    const correctEndPoint = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(correctEndPoint);
  });
 
  it('Testa se chamar a função "fetchProducts"sem argumento, retorna a mensagem de erro "You must provide an url"', async () => {
    const error = new Error('You must provide an url');
    const respons = await fetchProducts();
    expect(respons).toBeEqual(error);
  });
});
