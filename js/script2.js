document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.categoria');
    const products = document.querySelectorAll('.produtos');

    function filterElements(category) {
        products.forEach(product => {
            const productElements = product.getAttribute('category').split(' ');
            if (category === 'all' || productElements.includes(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.getAttribute('category');
            filterElements(category);
        });
    });

    const url = new URLSearchParams(window.location.search);
    const categorias = urlParams.get('category') || 'all';
    filterElements(categorias);
});
