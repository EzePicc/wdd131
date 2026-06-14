const categories = ['all', 'paint', 'drawing', 'surfaces'];

function renderFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  bar.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
      ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  `).join('');

  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts(btn.dataset.category);
    });
  });
}
function filterProducts(category) {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;
  const filtered = category == 'all' ? products : products.filter(p => p.category === category);
  if (filtered.length == 0) 
  {
    grid.innerHTML = '<p>No products found</p>';
  } else {
    grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
  }
}
renderFilters();
filterProducts('all');