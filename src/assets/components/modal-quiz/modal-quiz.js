document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.open-modal')
    const modal = document.querySelector('[data-modal]')
    if (!modal) return

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.add('hidden')
    })

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.remove('hidden')
        })
    })
});