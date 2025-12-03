document.querySelector('.btn').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.services').offsetTop,
        behavior: "smooth"
    });
});