const modal = document.getElementById("tourModal");
const frame = document.getElementById("tourFrame");
const modalTitle = document.getElementById("modalTitle");

document.querySelectorAll(".open-tour").forEach((button) => {
  button.addEventListener("click", () => {
    frame.src = button.dataset.url;
    modalTitle.textContent = button.dataset.title;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  frame.src = "";
}

document.querySelectorAll("[data-close]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});
