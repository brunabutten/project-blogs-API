/* PARTE 02 */

const fetchItem = (idItem) => {
  if (!idItem) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/items/${idItem}`;
  const x = fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
  return x;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
