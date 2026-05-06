const defaultAnimals = [
  
  {
    name: "Elephant",
    category: "Large Herbivores",
    location: "Amboseli",
    services: "Safari, Viewing",
  },
  {
    name: "Zebra",
    category: "Large Herbivores",
    location: "Maasai Mara",
    services: "Game drives",
  },
  {
    name: "Rhino",
    category: "Large Herbivores",
    location: "Nakuru",
    services: "Conservation tours",
  },
  {
    name: "Giraffe",
    category: "Large Herbivores",
    location: "Nairobi National Park",
    services: "Guided tours",
  },
  {
    name: "Hippopotamus",
    category: "Large Herbivores",
    location: "Lake Naivasha",
    services: "Boat rides",
  },
  {
    name: "Buffalo",
    category: "Large Herbivores",
    location: "Tsavo",
    services: "Wildlife viewing",
  },

  {
    name: "Lion",
    category: "Carnivores",
    location: "Maasai Mara",
    services: "Game drives",
  },
  {
    name: "Leopard",
    category: "Carnivores",
    location: "Samburu",
    services: "Tracking tours",
  },
  {
    name: "Black Panther",
    category: "Carnivores",
    location: "Laikipia",
    services: "Photography",
  },
  {
    name: "Wild Dog",
    category: "Carnivores",
    location: "Tsavo",
    services: "Conservation tours",
  },
  {
    name: "Jackal",
    category: "Carnivores",
    location: "Amboseli",
    services: "Viewing",
  },
  {
    name: "Fox",
    category: "Carnivores",
    location: "Northern Kenya",
    services: "Wildlife tours",
  },
  {
    name: "Hyena",
    category: "Carnivores",
    location: "Maasai Mara",
    services: "Night game drives",
  },
  {
    name: "Mongooses",
    category: "Carnivores",
    location: "Nairobi",
    services: "Education tours",
  },

  {
    name: "Chimpanzees",
    category: "Primates",
    location: "Kakamega Forest",
    services: "Guided tours",
  },
  {
    name: "Baboons",
    category: "Primates",
    location: "Nakuru",
    services: "Wildlife viewing",
  },
  {
    name: "Monkeys",
    category: "Primates",
    location: "Coastal Forests",
    services: "Eco tours",
  },
  {
    name: "Colobus",
    category: "Primates",
    location: "Diani",
    services: "Conservation tours",
  },
  {
    name: "Bushbabies",
    category: "Primates",
    location: "Tsavo",
    services: "Night tours",
  },

  {
    name: "Large Antelopes",
    category: "Antelopes & Ungulates",
    location: "Maasai Mara",
    services: "Game drives",
  },
  {
    name: "Small Antelopes",
    category: "Antelopes & Ungulates",
    location: "Samburu",
    services: "Viewing",
  },
  {
    name: "Duikers",
    category: "Antelopes & Ungulates",
    location: "Forests",
    services: "Eco tours",
  },
  {
    name: "Swine",
    category: "Antelopes & Ungulates",
    location: "Tsavo",
    services: "Wildlife tours",
  },

  {
    name: "Pangolins",
    category: "Elusive Mammals",
    location: "Laikipia",
    services: "Conservation education",
  },
  {
    name: "Insectivores",
    category: "Elusive Mammals",
    location: "Forests",
    services: "Research tours",
  },
  {
    name: "Hyraxes",
    category: "Elusive Mammals",
    location: "Rocky areas",
    services: "Viewing",
  },
  {
    name: "Rodents",
    category: "Elusive Mammals",
    location: "Various",
    services: "Education",
  },
  {
    name: "Hares",
    category: "Elusive Mammals",
    location: "Savannah",
    services: "Wildlife viewing",
  },
  {
    name: "Bats",
    category: "Elusive Mammals",
    location: "Caves",
    services: "Night tours",
  },
];

function getAnimals() {
  let animals = JSON.parse(localStorage.getItem("animals"));

  if (!animals) {
    localStorage.setItem("animals", JSON.stringify(defaultAnimals));
    return defaultAnimals;
  }

  return animals;
}

function saveAnimals(animals) {
  localStorage.setItem("animals", JSON.stringify(animals));
}

function displayAnimals(list) {
  const container = document.getElementById("animalList");

  if (!container) return;

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `
      <p class="no-results">No animals found.</p>
    `;
    return;
  }

  list.forEach((animal) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${animal.name}</h3>

      <p>
        <strong>Category:</strong>
        ${animal.category}
      </p>

      <p>
        <strong>Location:</strong>
        ${animal.location}
      </p>

      <p>
        <strong>Services:</strong>
        ${animal.services}
      </p>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayAnimals(getAnimals());
});

const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    const filteredAnimals = getAnimals().filter(
      (animal) =>
        animal.name.toLowerCase().includes(searchValue) ||
        animal.location.toLowerCase().includes(searchValue),
    );

    displayAnimals(filteredAnimals);
  });
}

const filter = document.getElementById("filter");

if (filter) {
  filter.addEventListener("change", function () {
    const selectedCategory = this.value;

    if (selectedCategory === "all") {
      displayAnimals(getAnimals());
      return;
    }

    const filteredAnimals = getAnimals().filter(
      (animal) => animal.category === selectedCategory,
    );

    displayAnimals(filteredAnimals);
  });
}

const form = document.getElementById("animalForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const location = document.getElementById("location").value.trim();
    const category = document.getElementById("category").value;
    const services = document.getElementById("services").value.trim();

    const errorMessage = document.getElementById("error");


    errorMessage.textContent = "";

    if (!name || !location || !category || !services) {
      errorMessage.textContent = "Please fill in all fields.";

      errorMessage.style.color = "red";

      return;
    }

    // NAME VALIDATION
    if (!/^[A-Za-z\s]+$/.test(name)) {
      errorMessage.textContent = " Animal name should contain letters only.";

      errorMessage.style.color = "red";

      return;
    }

    if (location.length <10) {
      errorMessage.textContent = " Location name is too short.";

      errorMessage.style.color = "red";

      return;
    }

    // SERVICES VALIDATION
    if (services.length <10) {
      errorMessage.textContent = " Services description is too short.";

      errorMessage.style.color = "red";

      return;
    }

    const animals = getAnimals();

    const animalExists = animals.some(
      (animal) => animal.name.toLowerCase() === name.toLowerCase(),
    );

    if (animalExists) {
      errorMessage.textContent = "⚠️ Animal already exists.";

      errorMessage.style.color = "red";

      return;
    }

    const newAnimal = {
      name,
      category,
      location,
      services,
    };

    animals.push(newAnimal);

    saveAnimals(animals);

    displayAnimals(animals);

    errorMessage.textContent = " Animal added successfully.";

    errorMessage.style.color = "green";
    form.reset();
  });
}
localStorage.setItem("animals", JSON.stringify(animals));
JSON.parse(localStorage.getItem("animals"));

