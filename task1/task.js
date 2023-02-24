 const reveal = document.querySelectorAll('.reveal');


window.addEventListener('scroll', revealElement); 

function revealElement() {
    [...reveal].forEach(element => {
        let windowHeight = window.innerHeight;
        let elemTop = element.getBoundingClientRect().top;

        if (elemTop < windowHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    })
}