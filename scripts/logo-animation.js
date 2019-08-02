(()=>{
    let frames = document.querySelectorAll('.logo');

    window.addEventListener('DOMContentLoaded', ()=>{
        frames[0].style.top = '-200px';
        frames[0].style.left = '-200px';
        frames[1].style.top = '-200px';
        frames[1].style.right = '-200px';
        frames[2].style.top = '200px';
        frames[2].style.right = '-200px';
        frames[3].style.top = '200px';
        frames[3].style.right = '-200px';

        setTimeout(()=>{
            frames.forEach(e=>e.style.opacity = '1');
            frames[0].style.top = '0px';
            frames[0].style.left = '0px';
            frames[1].style.top = '0px';
            frames[1].style.right = '0px';
            frames[2].style.top = '135px';
            frames[2].style.right = '0px';
            frames[3].style.top = '170px';
            frames[3].style.left = '0px';
        },500);

        setTimeout(()=>frames.forEach(e=>e.style.opacity = '0'),700);

        let i = 0;
        let j = 0;

        setTimeout(()=>{
            setInterval(()=>{
                frames[j].style.opacity = '0';

                j = i;
                frames[i++].style.opacity = '1';


                if(i === 4)
                    i = 0;



            },500);
        },800);


    });
})();
