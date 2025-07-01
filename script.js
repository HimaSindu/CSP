// script.js - JavaScript Functionality for Hearts & Homes

function checkHygiene() {
  let count = 0;
  document.querySelectorAll(".chk").forEach(c => { if(c.checked) count++; });
  document.getElementById("result").textContent = count >= 4 ? "You're a Hygiene Hero! 🌟" : "Keep going! 💪";
}

function checkQuiz(val) {
  document.getElementById("quiz-result").textContent = val === 20 ? "Correct! ✅" : "Oops! Try 20 seconds.";
}

function submitPledge() {
  const name = document.getElementById("name").value;
  document.getElementById("pledge-result").textContent = name ? `Thank you, ${name}! You’re a Hygiene Ambassador 🧼✨` : "Please enter your name!";
}

const orphanages = [
  {
    name: "Little Hearts Home",
    address: "123 Love Lane, Vishakapatnam, Andhra Pradesh - 530001",
    contact: "+91 98765 11111",
    needs: ["Books", "Water Bottles", "Raincoats"],
    timings: ["10:00 AM - 12:00 PM", "4:00 PM - 6:00 PM"]
  },
  {
    name: "Hope Shelter",
    address: "45 Hope Road, Vishakapatnam, Andhra Pradesh - 530002",
    contact: "+91 98765 22222",
    needs: ["Blankets", "School Bags", "Toiletries"],
    timings: ["9:00 AM - 11:00 AM", "3:00 PM - 5:00 PM"]
  },
  {
    name: "Sunshine Nest",
    address: "Sunrise Colony, Vishakapatnam, Andhra Pradesh - 530003",
    contact: "+91 98765 33333",
    needs: ["Stationery", "First Aid Kits", "Art Supplies"],
    timings: ["11:00 AM - 1:00 PM", "5:00 PM - 7:00 PM"]
  },
  {
    name: "Blooming Buds Orphanage",
    address: "Green Street, Vishakapatnam, Andhra Pradesh - 530004",
    contact: "+91 98765 44444",
    needs: ["Notebooks", "Toys", "Diapers"],
    timings: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"]
  },
  {
    name: "Shining Stars Shelter",
    address: "Lotus Lane, Vishakapatnam, Andhra Pradesh - 530005",
    contact: "+91 98765 55555",
    needs: ["Shoes", "Jackets", "Medicine Kits"],
    timings: ["9:00 AM - 11:00 AM", "4:00 PM - 6:00 PM"]
  },
  {
    name: "New Hope Foundation",
    address: "Sunflower Colony, Vishakapatnam, Andhra Pradesh - 530006",
    contact: "+91 98765 66666",
    needs: ["Laptops", "Backpacks", "Sanitary Kits"],
    timings: ["11:00 AM - 1:00 PM", "5:00 PM - 7:00 PM"]
  },
  {
    name: "Safe Haven Home",
    address: "Peace Avenue, Vishakapatnam, Andhra Pradesh - 530007",
    contact: "+91 98765 77777",
    needs: ["Clothing", "Footwear", "Cleaning Supplies"],
    timings: ["8:00 AM - 10:00 AM", "2:00 PM - 4:00 PM"]
  }
];

function searchOrphanage() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const listDiv = document.getElementById("orphanageList");
  const detailsDiv = document.getElementById("orphanageDetails");
  listDiv.innerHTML = '';
  detailsDiv.innerHTML = '';

  const filtered = orphanages.filter(o => o.name.toLowerCase().includes(input));

  if (filtered.length === 0) {
    listDiv.innerHTML = "<p>No orphanages found.</p>";
    return;
  }

  filtered.forEach((o) => {
    const btn = document.createElement("button");
    btn.textContent = o.name;
    btn.style = "padding: 12px 20px; margin: 10px; background-color: #e91e63; color: white; border: none; border-radius: 8px; cursor: pointer;";
    btn.onclick = () => showOrphanageDetails(o);
    listDiv.appendChild(btn);
  });
}

function showOrphanageDetails(orphanage) {
  const detailsDiv = document.getElementById("orphanageDetails");
  detailsDiv.innerHTML = `
    <h3 style="color:#e91e63;">${orphanage.name}</h3>
    <p><strong>Address:</strong> ${orphanage.address}</p>
    <p><strong>Contact:</strong> ${orphanage.contact}</p>
    <p><strong>Needs:</strong></p>
    <ul>${orphanage.needs.map(item => `<li>${item}</li>`).join('')}</ul>
    <p><strong>Available Time Slots:</strong></p>
    <ul>${orphanage.timings.map(time => `<li>${time}</li>`).join('')}</ul>
  `;
}
