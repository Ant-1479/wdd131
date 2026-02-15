// Select elements by ID
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Click event to toggle menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // animates hamburger
  navMenu.classList.toggle('active');   // slides menu in/out
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".collection-card");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    btn.classList.add("active");

    const category = btn.textContent.toLowerCase();

    cards.forEach(card => {
      card.style.display =
        category === "all" || card.dataset.category === category
          ? "block"
          : "none";
    });
  });
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

document.querySelectorAll(".quick-view").forEach(btn => {
  btn.addEventListener("click", e => {
    const card = e.target.closest(".collection-card");
    modalTitle.textContent = card.querySelector("h2").textContent;
    modalText.textContent = card.querySelector(".tagline").textContent;
    modal.classList.add("active");
  });
});

document.querySelector(".close").onclick = () => modal.classList.remove("active");

 
    const lastModified = document.lastModified;
    const dateEl = document.getElementById("date");
    if (dateEl) {
      dateEl.textContent = `Last Modified: ${lastModified}`;}

