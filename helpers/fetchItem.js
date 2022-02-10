/* REQUISITO 02: Adicione o produto ao carrinho de compras */

async function fetchItem(id) {
  const endPoint = `https://api.mercadolibre.com/items/${id}`;
  try {
    const resp = await fetch(endPoint);
    const result = await resp.json();
    return result;
  } catch (error) {
    return error;
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
