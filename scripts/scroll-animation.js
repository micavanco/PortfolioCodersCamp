(()=>{

    let faceContainer = document.querySelector('.face-container');
    let aboutDetailsContainer = document.querySelector('.about-details-container');
    let skillsBoxes = document.querySelectorAll('.skills-box');
    let portfolioBoxes = document.querySelectorAll('.portfolio-box');
    let contactCard = document.querySelector('.contact-wrapper');

    skillsBoxes.forEach(e =>
        window.addEventListener('scroll', () => {animateObjects(e, 'skills-move')}, false)
    );

    portfolioBoxes.forEach(e =>
        window.addEventListener('scroll', () => {animateObjects(e, 'portfolio-move')}, false)
    );

    window.addEventListener('scroll', () => {animateObjects(faceContainer, 'face-move')}, false);
    window.addEventListener('scroll', () => {animateObjects(aboutDetailsContainer, 'face-move')}, false);
    window.addEventListener('scroll', () => {animateObjects(contactCard, 'contact-move')}, false);

})();

function isElementInViewport(e){
    let rect = e.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right  <= (window.innerWidth  || document.documentElement.clientWidth)
    );
}

function animateObjects(el, cssClass) {
    if(isElementInViewport(el))
        el.classList.add(cssClass);
    else
        el.classList.remove(cssClass);
}
