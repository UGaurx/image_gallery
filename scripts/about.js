document.addEventListener('DOMContentLoaded', function () {
    const hamIcon = document.querySelector('.hamicon');
    const nav = document.querySelector('nav');
    const closeIcon = document.querySelector('.close');

    hamIcon.addEventListener('click', function () {
        nav.classList.add('open-nav');
        console.log('Ham icon clicked');
    });

    closeIcon.addEventListener('click', function () {
        nav.classList.remove('open-nav');
        console.log('Close icon clicked');
    });
});
