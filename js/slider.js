(function(){
    const sliders = [...document.querySelectorAll('.review__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', function atras(){
        changePosition(1);
    });

    buttonBefore.addEventListener('click', function atras(){
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.review__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('review__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('review__body--show');

    }
    (function loop() {
        setTimeout(function() {
            changePosition(1);
            loop();
        }, 10000);
    })();
})();