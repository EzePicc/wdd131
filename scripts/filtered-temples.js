const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 11699,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Buenos_Aires_Argentina_Temple_by_nadiamercer_crop.jpeg/960px-Buenos_Aires_Argentina_Temple_by_nadiamercer_crop.jpeg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 13898,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Templo_de_Santiago%2C_Providencia_20220501_02.jpg/960px-Templo_de_Santiago%2C_Providencia_20220501_02.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 13074,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Iglesia_SUD_en_Bogot%C3%A1.jpg/960px-Iglesia_SUD_en_Bogot%C3%A1.jpg"
  }
];

function showTemples(list) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = list.map(t => `
    <figure>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
      <figcaption>
        <h2>${t.templeName}</h2>
        <p>Location: ${t.location}</p>
        <p>Dedicated: ${t.dedicated}</p>
        <p>Area: ${t.area.toLocaleString()} sq ft</p>
      </figcaption>
    </figure>
  `).join('');
}
 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
 
hamburger.addEventListener('click', function() 
{
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');
});
 
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const filter = this.dataset.filter;
        let result;
        if (filter === 'old') {
            result = temples.filter(t => parseInt(t.dedicated) < 1900);
        } else if (filter === 'new') {
            result = temples.filter(t => parseInt(t.dedicated) > 2000);
        } else if (filter === 'large') {
            result = temples.filter(t => t.area > 90000);
        } else if (filter === 'small') {
            result = temples.filter(t => t.area < 10000);
        } else {
            result = temples;
        }
        showTemples(result);
        hamburger.classList.remove('open');
        navMenu.classList.remove('active');
    });
});
 
document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);
    if (!isClickInsideNav && !isClickInsideHamburger) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('active');
    }
});
 
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
 
showTemples(temples);
 