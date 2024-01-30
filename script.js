function searchImages() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const images = document.querySelectorAll('.image-container img');

    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        const shouldShow = altText.includes(searchTerm);

        img.style.display = shouldShow ? 'inline-block' : 'none';
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const hamIcon = document.querySelector('.hamicon');
    const nav = document.querySelector('nav');
    const closeIcon = document.querySelector('.close');

    hamIcon.addEventListener('click', function () {
        nav.classList.add('open-nav');
    });

    closeIcon.addEventListener('click', function () {
        nav.classList.remove('open-nav');
    });
});
