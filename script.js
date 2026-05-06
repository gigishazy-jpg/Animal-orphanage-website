
const defaultData = {

  narok: {
    name: "Narok County",
    places: [
      {
        name: "Maasai Mara National Reserve",
        animals: ["Lion", "Cheetah", "Elephant", "Zebra", "Hyena"],
        services: [
          "Game drives (Big Five)",
          "Hot air balloon safaris",
          "Maasai cultural tours",
          "Wildlife photography",
          "Great Migration viewing"
        ]
      },
      {
        name: "Mara River",
        animals: ["Hippo", "Crocodile"],
        services: [
          "Migration crossing viewing",
          "Guided safari tours",
          "Photography tours"
        ]
      },
      {
        name: "Suswa Caves",
        animals: ["Bats"],
        services: [
          "Cave exploration",
          "Hiking",
          "Adventure tourism"
        ]
      },
      {
        name: "Sala’s Camp",
        animals: ["Lion", "Elephant"],
        services: [
          "Luxury accommodation",
          "Private game drives",
          "Guided safaris"
        ]
      }
    ]
  },

  kajiado: {
    name: "Kajiado County",
    places: [
      {
        name: "Amboseli National Park",
        animals: ["Elephant", "Buffalo", "Lion", "Giraffe"],
        services: [
          "Elephant viewing safaris",
          "Guided game drives",
          "Bird watching",
          "Photography (Mt. Kilimanjaro)"
        ]
      }
    ]
  },

  nairobi: {
    name: "Nairobi County",
    places: [
      {
        name: "Nairobi National Park",
        animals: ["Rhino", "Lion", "Zebra"],
        services: [
          "Game drives",
          "Rhino conservation",
          "Educational tours",
          "Picnic sites"
        ]
      },
      {
        name: "Sheldrick Wildlife Trust",
        animals: ["Elephants"],
        services: [
          "Elephant rescue",
          "Rehabilitation",
          "Public viewing",
          "Adoption programs"
        ]
      },
      {
        name: "Giraffe Centre",
        animals: ["Giraffe"],
        services: [
          "Giraffe feeding",
          "Conservation education",
          "School tours"
        ]
      },
      {
        name: "Nairobi Animal Orphanage",
        animals: ["Various rescued animals"],
        services: [
          "Animal rescue",
          "Rehabilitation",
          "Public education"
        ]
      }
    ]
  },

  laikipia: {
    name: "Laikipia County",
    places: [
      {
        name: "Ol Pejeta Conservancy",
        animals: ["Rhino", "Chimpanzee", "Lion"],
        services: [
          "Chimpanzee sanctuary",
          "Rhino conservation",
          "Night game drives",
          "Guided safaris"
        ]
      },
      {
        name: "Solio Ranch",
        animals: ["Rhino"],
        services: [
          "Rhino breeding",
          "Private safaris",
          "Wildlife conservation"
        ]
      },
      {
        name: "Mpala Research Centre",
        animals: ["Various wildlife"],
        services: [
          "Wildlife research",
          "Scientific studies",
          "Student training"
        ]
      }
    ]
  },

  nakuru: {
    name: "Nakuru County",
    places: [
      {
        name: "Lake Nakuru National Park",
        animals: ["Flamingo", "Rhino"],
        services: [
          "Bird watching",
          "Game drives",
          "Scenic viewpoints"
        ]
      },
      {
        name: "Lake Naivasha",
        animals: ["Hippo", "Fish Eagle"],
        services: [
          "Boat safaris",
          "Fishing",
          "Nature tours"
        ]
      },
      {
        name: "Hell’s Gate National Park",
        animals: ["Zebra", "Buffalo"],
        services: [
          "Cycling safaris",
          "Walking tours",
          "Rock climbing"
        ]
      },
      {
        name: "Crescent Island",
        animals: ["Zebra", "Giraffe"],
        services: [
          "Walking safaris",
          "Photography",
          "Bird watching"
        ]
      }
    ]
  },

  samburu: {
    name: "Samburu County",
    places: [
      {
        name: "Samburu National Reserve",
        animals: ["Grevy’s Zebra", "Reticulated Giraffe"],
        services: [
          "Game drives",
          "Guided safaris",
          "Cultural tours"
        ]
      },
      {
        name: "Reteti Elephant Sanctuary",
        animals: ["Elephants"],
        services: [
          "Elephant rescue",
          "Rehabilitation",
          "Community conservation"
        ]
      }
    ]
  },

  meru: {
    name: "Meru County",
    places: [
      {
        name: "Meru National Park",
        animals: ["Elephant", "Lion"],
        services: [
          "Game drives",
          "Nature walks",
          "Camping"
        ]
      }
    ]
  },

  homabay: {
    name: "Homa Bay County",
    places: [
      {
        name: "Ruma National Park",
        animals: ["Roan Antelope"],
        services: [
          "Wildlife viewing",
          "Bird watching",
          "Guided tours"
        ]
      }
    ]
  },

  kilifi: {
    name: "Kilifi County",
    places: [
      {
        name: "Arabuko Sokoke Forest",
        animals: ["Elephant Shrew"],
        services: [
          "Forest tours",
          "Bird watching",
          "Conservation education"
        ]
      },
      {
        name: "Gede Ruins",
        animals: ["Monkeys", "Bushbabies"],
        services: [
          "Historical tours",
          "Nature walks"
        ]
      }
    ]
  },

  kwale: {
    name: "Kwale County",
    places: [
      {
        name: "Diani Beach",
        animals: ["Colobus Monkey"],
        services: [
          "Beach tourism",
          "Water sports",
          "Conservation tours"
        ]
      },
      {
        name: "Shimba Hills",
        animals: ["Elephant"],
        services: [
          "Forest hiking",
          "Wildlife viewing"
        ]
      }
    ]
  },

  baringo: {
    name: "Baringo County",
    places: [
      {
        name: "Lake Baringo",
        animals: ["Bird species"],
        services: [
          "Boat rides",
          "Bird watching"
        ]
      }
    ]
  },

  tanariver: {
    name: "Tana River County",
    places: [
      {
        name: "Tana River",
        animals: ["Hippo"],
        services: [
          "River tours",
          "Fishing",
          "Bird watching"
        ]
      }
    ]
  },

  kakamega: {
    name: "Kakamega County",
    places: [
      {
        name: "Kakamega Forest",
        animals: ["Colobus Monkey"],
        services: [
          "Forest walks",
          "Bird watching",
          "Primate tracking"
        ]
      }
    ]
  },

  transnzoia: {
    name: "Trans Nzoia County",
    places: [
      {
        name: "Kitum Cave (Mt. Elgon)",
        animals: ["Elephants"],
        services: [
          "Cave exploration",
          "Hiking",
          "Wildlife observation"
        ]
      }
    ]
  }
};

let counties = JSON.parse(localStorage.getItem("counties")) || defaultData;
const searchInput = document.getElementById("searchInput");
const countySelect = document.getElementById("countySelect");
const output = document.getElementById("output");

function loadCounties(filter = "") {
  countySelect.innerHTML = "";

  Object.keys(counties).forEach(key => {
    const county = counties[key];

    if (county.name.toLowerCase().includes(filter.toLowerCase())) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = county.name;
      countySelect.appendChild(option);
    }
  });

  if (countySelect.options.length === 0) {
    countySelect.innerHTML = "<option>No county found</option>";
  }
}

loadCounties();

searchInput.addEventListener("input", () => {
  loadCounties(searchInput.value);
});
function displayCounty(key) {
  const data = counties[key];

  if (!data) {
    output.innerHTML = "<p style='color:red;'>Invalid county</p>";
    return;
  }

  let html = `<h3>${data.name}</h3>`;

  data.places.forEach(place => {
    html += `
      <div class="place">
        <h3>${place.name}</h3>

        <p><strong>Animals:</strong></p>
        <ul>${place.animals.map(a => `<li>${a}</li>`).join("")}</ul>

        <p><strong>Services:</strong></p>
        <ul>${place.services.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>
    `;
  });

  output.innerHTML = html;

  localStorage.setItem("lastCounty", key);
}

countySelect.addEventListener("change", () => {
  const selected = countySelect.value;
  displayCounty(selected);
});

window.addEventListener("DOMContentLoaded", () => {
  const last = localStorage.getItem("lastCounty");
  if (last && counties[last]) {
    countySelect.value = last;
    displayCounty(last);
  }
});const form = document.getElementById("form");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const county = document.getElementById("county").value.trim().toLowerCase();
  const place = document.getElementById("place").value.trim();
  const animals = document.getElementById("animals").value.split(",");
  const services = document.getElementById("services").value.split(",");

  if (!county || !place) {
    message.textContent = " Please fill all fields!";
    message.style.color = "red";
    return;
  }

  if (!counties[county]) {
    counties[county] = {
      name: county + " County",
      places: [],
    };
  }

  counties[county].places.push({
    name: place,
    animals: animals,
    services: services,
  });

  localStorage.setItem("counties", JSON.stringify(counties));

  message.textContent = " Place added successfully!";
  message.style.color = "green";

  form.reset();
});
