// Get modal element
const modal = document.getElementById("simpleModal");
// Get open modal button
const modalBtn = document.getElementById("modalBtn");
// Get open close button
const closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for click
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", clickOutside);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
