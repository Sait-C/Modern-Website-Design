const modalButtons = document.querySelectorAll('#modal-btn');

modalButtons.forEach((dataModalBtn) => {
    const modal = document.getElementById(dataModalBtn.getAttribute('modal'));

    dataModalBtn.addEventListener('click', () => {
        modal.showModal();
    })
})