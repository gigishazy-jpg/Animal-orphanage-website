
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
    container.innerHTML = "<p>No animals found.</p>";
    return;
  }

  list.forEach(animal => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${animal.name}</h3>
      <p><strong>Category:</strong> ${animal.category}</p>
      <p><strong>Location:</strong> ${animal.location}</p>
      <p><strong>Services:</strong> ${animal.services}</p>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayAnimals(getAnimals());
});

const search = document.getElementById("search");

if (search) {
  search.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    const filtered = getAnimals().filter(animal =>
      animal.name.toLowerCase().includes(value) ||
      animal.location.toLowerCase().includes(value)
    );

    displayAnimals(filtered);
  });
}

const filter = document.getElementById("filter");

if (filter) {
  filter.addEventListener("change", function () {
    const value = this.value;

    if (value === "all") {
      displayAnimals(getAnimals());
      return;
    }

    const filtered = getAnimals().filter(animal =>
      animal.category === value
    );

    displayAnimals(filtered);
  });
}

const form = document.getElementById("animalForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value.trim();
    const services = document.getElementById("services").value.trim();
    const message = document.getElementById("error");

    message.textContent = "";

    if (!name || !category || !location || !services) {
      message.textContent = " All fields are required!";
      message.style.color = "red";
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      message.textContent = "Animal name must contain only letters!";
      message.style.color = "red";
      return; 
    }

    if (location.length < 10) {
      message.textContent = " Location must be at least 10 characters!";
      message.style.color = "red";
      return;
    }

    if (services.length < 10) {
      message.textContent = " Services must be meaningful!";
      message.style.color = "red";
      return;
    }

    const animals = getAnimals();

    // 5. Duplicate check
    const exists = animals.some(
      a => a.name.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
      message.textContent = " This animal already exists!";
      message.style.color = "red";
      return;
    }
    const newAnimal = {
      name,
      category,
      location,
      services
    };

    animals.push(newAnimal);
    saveAnimals(animals);

    // SUCCESS
    message.textContent = " Animal added successfully!";
    message.style.color = "green";

    form.reset();
  });
}