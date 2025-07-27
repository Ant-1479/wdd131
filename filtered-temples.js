const now = new Date();
    const currentYear = now.getFullYear();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);


    const copyrightEl = document.getElementById("copyright");
    if (copyrightEl) {
      copyrightEl.innerHTML = `&copy; ${currentYear} Obeng Antwiwaah Stephanie. All rights reserved. Date: ${formattedDate}`;
    }

    
    const lastModified = document.lastModified;
    const dateEl = document.getElementById("date");
    if (dateEl) {
      dateEl.textContent = `Last Modified: ${lastModified}`;}

      const toggleBtn =
      document .getElementsById("menu-toggle");
      const navMenu=
      document.querySelector("#nav li");

      toggleBtn.addEventListener("click", ()=> {
        navMenu.classList.toggle("show");
      });

      const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
   {
    templeName: "Boise Idaho",
    location: "Boise, Idaho, United States",
    dedicated: "1984, April, 6",
    area: 35868,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/400x250/boise-idaho-temple-lds-2.jpg"
  },

  {
    templeName: "Fairbanks Alaska",
    location: "Fairbanks, Alaska, United States",
    dedicated: "2000, November, 12",
    area: 10000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fairbanks-alaska/400x250/fairbanks-alaska-temple-lds-2.jpg"
  }
];

const container = document.getElementById("templesContainer");

temples.forEach(temple => {
  const card = document.createElement("div");
  card.className = "temple-card";

  card.innerHTML = `
    <h2>${temple.name}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
  `;

  container.appendChild(card);
});


document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));
document.getElementById('home').addEventListener('click', () => filterTemples('home'));
function filterTemples(criteria) {
  let filteredTemples = [];

  if (criteria === 'old') {
    filteredTemples = temples.filter(t => new Date(t.dedicated) < new Date('1900-01-01'));
  } else if (criteria === 'new') {
    filteredTemples = temples.filter(t => new Date(t.dedicated) > new Date('2000-01-01'));
  } else if (criteria === 'large') {
    filteredTemples = temples.filter(t => t.size > 90000);
  } else if (criteria === 'small') {
    filteredTemples = temples.filter(t => t.size < 10000);
  } else {
    filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}
function displayTemples(temples) {
  const container = document.getElementById("templesContainer");
  container.innerHTML = ''; 

  temples.forEach(temple => {
    const card = document.createElement("div");
    card.className = "temple-card";

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}