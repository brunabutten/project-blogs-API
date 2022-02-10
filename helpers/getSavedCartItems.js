/* PARTE 04 */

const getSavedCartItems = (one, addEvent) => {
  localStorage.getItem('cartItems');
  const x = JSON.parse(localStorage.getItem('cartItems'));
  if (x !== null && x !== undefined) {
    x.forEach((e) => {
      const li = document.createElement('li');
      li.innerText = e;
      li.addEventListener('click', addEvent);
      one.appendChild(li);
    });
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
