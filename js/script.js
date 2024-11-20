document.getElementById('product-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevenir el envío del formulario

  // Obtener valores del formulario
  const name = document.getElementById('product-name').value.trim();
  const price = document.getElementById('product-price').value.trim();
  const image = document.getElementById('product-image').value.trim();

  // Validar que todos los campos tengan valores
  if (!name || !price || !image) {
    alert("Por favor, completa todos los campos antes de enviar.");
    return;
  }

  // Crear una tarjeta de producto
  const productCard = document.createElement('div');
  productCard.classList.add('card');

  productCard.innerHTML = `
    <img src="${image}" alt="${name}">
    <h3>${name}</h3>
    <p>$ ${parseFloat(price).toFixed(2)}</p>
    <button class="delete-btn">Eliminar</button>
  `;

  // Agregar la tarjeta al listado
  document.getElementById('product-list').appendChild(productCard);

  // Limpiar el formulario
  document.getElementById('product-form').reset();

  // Agregar evento para eliminar tarjeta
  productCard.querySelector('.delete-btn').addEventListener('click', function () {
    productCard.remove();
  });
});
