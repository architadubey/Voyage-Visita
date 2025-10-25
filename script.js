function searchDestinations() {
  let destinationInput = document.getElementById("destination").value.toLowerCase();
  let typeInput = document.getElementById("travelType").value.toLowerCase();
  
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let destination = card.getAttribute("data-destination");
    let type = card.getAttribute("data-type");

    // Show card only if it matches destination or type
    if (
      (destination.includes(destinationInput) || destinationInput === "") &&
      (type.includes(typeInput) || typeInput === "")
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
// Place information
const places = {
  delhi: {
    img: "images/delhi.jpg",
    text: "Delhi, the capital of India, is famous for its rich culture, history, and landmarks like the Red Fort, India Gate, and Qutub Minar."
  },
  mumbai: {
    img: "images/mumbai.jpg",
    text: "Mumbai, the city of dreams, is known for Bollywood, Marine Drive, and the Gateway of India."
  },
  agra: {
    img: "images/agra.jpg",
    text: "Agra is home to the iconic Taj Mahal, one of the Seven Wonders of the World."
  },
  kerala: {
    img: "images/kerala-exp.jpg",
    text: "Kerala, called 'God's Own Country', is known for its backwaters, beaches, and lush greenery."
  },
  jaipur: {
    img: "images/jaipur.jpg",
    text: "Jaipur, the Pink City, is known for its forts, palaces, and colorful culture."
  },
  goa: {
    img: "images/goa.jpg",
    text: "Goa is famous for its beaches, vibrant nightlife, and Portuguese heritage."
  }
};

function showInfo(placeId) {
  const infoSection = document.getElementById('info-section');
  const infoContent = document.getElementById('info-content');
  switch(placeId) {
    case 'delhi':
      infoContent.innerHTML = `<h2>Delhi</h2><p>Information about Delhi...</p><img src="delhi.jpeg" alt="Delhi">`;
      break;
    case 'mumbai':
      infoContent.innerHTML = `<h2>Mumbai</h2><p>Information about Mumbai...</p><img src="mumbai.jpeg" alt="Mumbai">`;
      break;
    case 'varanasi':
      infoContent.innerHTML = `<h2>Varanasi</h2><p>Information about Varanasi...</p><img src="varanasi.jpeg" alt="Varanasi">`;
      break;
    case 'rishikesh':
      infoContent.innerHTML = `<h2>Rishikesh</h2><p>Information about Rishikesh...</p><img src="rishikesh.jpeg" alt="Rishikesh">`;
      break;
    case 'ladakh':
      infoContent.innerHTML = `<h2>Ladakh</h2><p>Information about Ladakh...</p><img src="ladakh.jpeg" alt="Ladakh">`;
      break;
    case 'mysore':
      infoContent.innerHTML = `<h2>Mysore</h2><p>Information about Mysore...</p><img src="mysore.jpeg" alt="Mysore">`;
      break;
    case 'udaipur':
      infoContent.innerHTML = `<h2>Udaipur</h2><p>Information about Udaipur...</p><img src="udaipur.jpeg" alt="Udaipur">`;
      break;
    case 'amritsar':
      infoContent.innerHTML = `<h2>Amritsar</h2><p>Information about Amritsar...</p><img src="amritsar.jpeg" alt="Amritsar">`;
      break;
    case 'darjeeling':
      infoContent.innerHTML = `<h2>Darjeeling</h2><p>Information about Darjeeling...</p><img src="darjeeling.jpeg" alt="Darjeeling">`;
      break;
    case 'hampi':
      infoContent.innerHTML = `<h2>Hampi</h2><p>Information about Hampi...</p><img src="hampi.jpeg" alt="Hampi">`;
      break;
    case 'kolkata':
      infoContent.innerHTML = `<h2>Kolkata</h2><p>Information about Kolkata...</p><img src="kolkata.jpeg" alt="Kolkata">`;
      break;
    case 'andaman':
      infoContent.innerHTML = `<h2>Andaman Islands</h2><p>Information about Andaman Islands...</p><img src="andaman.jpeg" alt="Andaman Islands">`;
      break;
    case 'rann':
      infoContent.innerHTML = `<h2>Rann of Kutch</h2><p>Information about Rann of Kutch...</p><img src="rann.jpeg" alt="Rann of Kutch">`;
      break;
    // Add other cases for each destination as shown above
    default:
      infoContent.innerHTML = `<p>No information available for this destination.</p>`;
  }
  infoSection.classList.remove('hidden');
  window.scrollTo({ top: infoSection.offsetTop, behavior: 'smooth' });
}



const itineraries = {
  delhi: {
    budgetwise: `
      <h3>Delhi – Budget Based Itinerary</h3>
      <p><b>Budget:</b> Hostel ₹600/night, metro pass, street food (Chandni Chowk).</p>
      <p><b>Standard:</b> 3★ hotel ₹3000/night, cabs, restaurants like Karim’s.</p>
      <p><b>Luxury:</b> 5★ hotel ₹12,000/night, private guide, fine dining at ITC Maurya.</p>
    `
  },
  goa: {
    budgetwise: `
      <h3>Goa – Budget Based Itinerary</h3>
      <p><b>Budget:</b> Hostel ₹700/night, Mumbai local train, vada pav & street food.</p>
      <p><b>Standard:</b> 3★ hotel ₹3500/night, Uber, restaurants in Bandra.</p>
      <p><b>Luxury:</b> 5★ hotel ₹15,000/night, chauffeur, luxury dining at Taj Mahal Palace.</p>
    `
  },
  // ... add agra, kerala, jaipur, goa here
};

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const places = document.querySelectorAll(".place");

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    places.forEach(place => {
      // Get the text from the paragraph inside each place div
      const text = place.querySelector("p").textContent.toLowerCase();
      if (text.includes(filter)) {
        place.style.display = "block"; // Show matching places
      } else {
        place.style.display = "none"; // Hide non-matching places
      }
    });
  });
});


// ====== Destination Data ======
const destinations = [
  { id: 'delhi', name: 'Delhi' },
  { id: 'agra', name: 'Agra' },
  { id: 'kerala', name: 'Kerala' },
  { id: 'jaipur', name: 'Jaipur' },
  { id: 'goa', name: 'Goa' },
  { id: 'mumbai', name: 'Mumbai' },
  { id: 'varanasi', name: 'Varanasi' },
  { id: 'rishikesh', name: 'Rishikesh' },
  { id: 'ladakh', name: 'Ladakh' },
  { id: 'mysore', name: 'Mysore' },
  { id: 'udaipur', name: 'Udaipur' },
  { id: 'amritsar', name: 'Amritsar' },
  { id: 'darjeeling', name: 'Darjeeling' },
  { id: 'hampi', name: 'Hampi' },
  { id: 'kolkata', name: 'Kolkata' },
  { id: 'andaman', name: 'Andaman Islands' },
  { id: 'rann', name: 'Rann of Kutch' }
];

// ====== DOM Elements ======
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');

// ====== Show Suggestions ======
function showSuggestions(list) {
  suggestionsList.innerHTML = ''; // clear old list
  list.forEach(dest => {
    const li = document.createElement('li');
    li.textContent = dest.name;
    li.classList.add('suggestion-item');
    li.onclick = () => {
      searchInput.value = dest.name;
      suggestionsList.classList.add('hidden');
      showInfo(dest.id); // your existing info function
    };
    suggestionsList.appendChild(li);
  });
  suggestionsList.classList.remove('hidden');
}

// ====== Show full list when input focused ======
searchInput.addEventListener('focus', () => {
  showSuggestions(destinations);
});

// ====== Filter as user types ======
searchInput.addEventListener('input', function() {
  const value = this.value.trim().toLowerCase();
  if (value.length === 0) {
    showSuggestions(destinations);
    return;
  }

  const matched = destinations.filter(dest =>
    dest.name.toLowerCase().includes(value)
  );

  if (matched.length === 0) {
    suggestionsList.classList.add('hidden');
  } else {
    showSuggestions(matched);
  }
});

// ====== Hide suggestions on outside click ======
document.addEventListener('click', (e) => {
  if (e.target !== searchInput && !suggestionsList.contains(e.target)) {
    suggestionsList.classList.add('hidden');
  }
});




