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
      templeName: "Bern Switzerland",
      location: "Bern, Switzerland",
      dedicated: "1955, September, 11",
      area: 10172,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-thumb.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 25000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    },
    {
      templeName: "Jordan River Utah",
      location: "South Jordan, Utah, United States",
      dedicated: "1981, November, 16",
      area: 148236,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-51608-main.jpg"
    },
    {
        templeName: "Antananarivo Madagascar",
        location: "Antananarivo, Madagascar",
        dedicated: "2025, March, 15",
        area: 10000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/antananarivo-madagascar-temple/antananarivo-madagascar-temple-57245-main.jpg"
    },
    {
        templeName: "Antofagasta Chile",
        location: "Antofagasta, Chile",
        dedicated: "2020, November, 27",
        area: 23000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, February, 20",
        area: 45800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    
  ];
  
  // Function to display copyright year
  function setCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  }
  
  // Function to display last modified date
  function setLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
  }
  
  // Function to create temple cards
  function createTempleCard(temple) {
    const card = document.createElement('div');
    card.classList.add('temple-card');
    
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <div class="temple-details">
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
    `;
    
    return card;
  }
  
  // Function to display temples
  function displayTemples(filteredTemples) {
    const templeGrid = document.getElementById('templeGrid');
    templeGrid.innerHTML = ''; // Clear existing temples
    
    filteredTemples.forEach(temple => {
      const templeCard = createTempleCard(temple);
      templeGrid.appendChild(templeCard);
    });
  }
  
  // Function to filter temples
  function filterTemples(filter) {
    const currentView = document.getElementById('currentView');
    let filteredTemples;
  
    switch(filter) {
      case 'old':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        currentView.textContent = 'Old Temples';
        break;
      case 'new':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        currentView.textContent = 'New Temples';
        break;
      case 'large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        currentView.textContent = 'Large Temples';
        break;
      case 'small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        currentView.textContent = 'Small Temples';
        break;
      default:
        filteredTemples = temples;
        currentView.textContent = 'Temple Collection';
    }
  
    displayTemples(filteredTemples);
  }
  
  // Hamburger menu toggle
  function toggleMenu() {
    const nav = document.getElementById('primaryNav');
    nav.classList.toggle('open');
  }
  
  // Event Listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Initial display of all temples
    displayTemples(temples);
    
    // Set copyright and last modified
    setCopyrightYear();
    setLastModified();
  
    // Hamburger menu listener
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    hamburgerBtn.addEventListener('click', toggleMenu);
  
    // Navigation filter listeners
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('href').slice(1);
        filterTemples(filter);
        
        // Close menu on mobile after selection
        const nav = document.getElementById('primaryNav');
        nav.classList.remove('open');
      });
    });
  });