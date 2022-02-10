/* PARTE 01 */

const fetchProducts = (product) => {
  if (!product) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const x = fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => err);
    return x;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
