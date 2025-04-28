  const button = document.querySelector(".modal-button");
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector('.close-modal')
  button.addEventListener("click", function openModal() {
    modal.classList.add("open");
  });
  closeModal.addEventListener('click', function closeModal() {
    modal.classList.remove('open')
  })
