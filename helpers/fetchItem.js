/* REQUISITO 02: Adicione o produto ao carrinho de compras */

const fetchItem = async (id) => {
  try {
    const endPoint = `https://api.mercadolibre.com/items/${id}`;
    const resp = await fetch(endPoint);
    const result = await resp.json();
    return result;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
