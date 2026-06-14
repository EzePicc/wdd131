document.getElementById('year').textContent = new Date().getFullYear();

window.products = [
  { name: 'Watercolor Set', price: 18.99, category: 'paint', image: 'images/product1.webp', description: '24-color beginner watercolor kit' },
  { name: 'Sketching Pencils', price: 9.99, category: 'drawing', image: 'images/product2.webp', description: 'Set of 12 graphite pencils' },
  { name: 'Canvas Pack', price: 24.99, category: 'surfaces', image: 'images/product3.webp', description: '5 pre-stretched canvases' },
  { name: 'Acrylic Paint Set', price: 21.99, category: 'paint', image: 'images/product4.webp', description: '12 vibrant acrylic colors' },
  { name: 'Ink Brush Pens', price: 14.99, category: 'drawing', image: 'images/product5.webp', description: 'Set of 6 brush pens' },
  { name: 'Watercolor Paper', price: 11.99, category: 'surfaces', image: 'images/product6.webp', description: 'Cold press, 30 sheets' }
];

window.testimonials = [
  { text: 'Best art shop in town. I always find what I want.', author: 'Sophia P.' },
  { text: 'The starter kit was great for my daughter.', author: 'Candela A.' },
  { text: 'Great quality and excelent service!', author: 'Julio P.' }
];

window.createProductCard = function(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" width="200" height="160" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price}</strong></p>
    </div>
  `;
};

window.renderFeatured = function() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = products.slice(0, 4);
  grid.innerHTML = featured.map(p => createProductCard(p)).join('');
};

window.renderTestimonials = function() {
  const grid = document.getElementById('testimonial-grid');
  if (!grid) return;
  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <p>${t.text}</p>
      <span>— ${t.author}</span>
    </div>
  `).join('');
};

renderFeatured();
renderTestimonials();