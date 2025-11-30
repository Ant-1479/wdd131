

const products = [
    { id: 1, name: "Perfume A" },
    { id: 2, name: "Perfume B" },
    { id: 3, name: "Perfume C" },
];
const productSelect = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
