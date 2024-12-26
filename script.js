window.onscroll = function() {
    const backTopButton = document.querySelector('.back-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backTopButton.style.display = 'block';
    } else {
        backTopButton.style.display = 'none';
    }
};

document.querySelector('.back-top').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};