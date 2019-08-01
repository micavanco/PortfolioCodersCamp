(()=>{

    let faceContainer = document.querySelector('.face-container');
    let aboutDetailsContainer = document.querySelector('.about-details-container');
    let skillsBoxes = document.querySelectorAll('.skills-box');
    let skillsBox1 = skillsBoxes[0];
    let skillsBox2 = skillsBoxes[1];
    let skillsBox3 = skillsBoxes[2];

    window.addEventListener('scroll', () => {animateObjects(faceContainer, 'face-move')}, false);
    window.addEventListener('scroll', () => {animateObjects(aboutDetailsContainer, 'face-move')}, false);
    window.addEventListener('scroll', () => {animateObjects(skillsBox1, 'skills-move')}, false);
    window.addEventListener('scroll', () => {animateObjects(skillsBox2, 'skills-move')}, false);
    window.addEventListener('scroll', () => {animateObjects(skillsBox3, 'skills-move')}, false);
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
