document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, существует ли контейнер секции
    const socialSection = document.querySelector('.social-item');

    // Если элементов нет - прекращаем выполнение
    if (!socialSection || window.innerWidth < 768) return;

    const socialItems = document.querySelectorAll('.social-item');
    const previewImages = document.querySelectorAll('[data-preview]');

    // Проверяем, есть ли элементы для работы
    if (socialItems.length === 0 || previewImages.length === 0) return;

    // Показываем первое изображение по умолчанию
    previewImages[0].classList.remove( 'opacity-0', '-translate-x-16');
    previewImages[0].classList.add('opacity-100', 'translate-x-0');

    socialItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const socialSlug = item.dataset.social;

            // Скрываем все изображения
            previewImages.forEach(img => {
                img.classList.add( 'opacity-0', '-translate-x-16');
                img.classList.remove('opacity-100', 'translate-x-0');
            });

            // Показываем нужное
            const targetImg = document.querySelector(`[data-preview="${socialSlug}"]`);
            if (targetImg) {
                targetImg.classList.remove( 'opacity-0', '-translate-x-16');
                targetImg.classList.add('opacity-100', 'translate-x-0');
            }
        });
    });
});