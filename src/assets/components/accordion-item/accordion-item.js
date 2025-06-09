document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Если элементов нет - прекращаем выполнение
    if (!accordionItems) return;

    accordionItems.forEach((accordion) => {
        const button = accordion.querySelector('.accordion-button');
        const content = accordion.querySelector('.accordion-content');

        button.addEventListener('click', () => {
            const isOpen = accordion.classList.toggle('open');

            // Анимация появления контента
            content.classList.toggle('max-h-0');
            content.classList.toggle('max-h-screen');
            content.classList.toggle('opacity-0');
            content.classList.toggle('opacity-100');
            content.classList.toggle('pb-6');

            // Поворот кнопки
            button.classList.toggle('-rotate-45');
        });
    });
});