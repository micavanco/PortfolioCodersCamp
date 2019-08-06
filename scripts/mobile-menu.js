(()=>{
    let hamburgerBtn = document.querySelector('.hamburger-btn');
    let mobileMenu = document.querySelector('.mobile-menu');

    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('setInvisible');
        hamburgerBtn.classList.toggle('onVisible');
    });
})();
