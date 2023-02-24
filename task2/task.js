const rotator = document.querySelectorAll('.rotator__case');
const getIndex = (rotCase) => rotCase.classList.contains('rotator__case_active');


function changeCase() {
    let currentIndex = [...rotator].findIndex(getIndex)
    rotator[currentIndex].classList.remove('rotator__case_active');
    if (currentIndex === (rotator.length - 1)) {
        rotator[0].classList.add('rotator__case_active');
        rotator[0].style.color = rotator[0].dataset.color;
    } else {
        currentIndex++;
        rotator[currentIndex].classList.add('rotator__case_active');
        rotator[currentIndex].style.color = rotator[currentIndex].dataset.color;
    }
    clearInterval(interval);
    interval = setInterval(changeCase,rotator[[...rotator].findIndex(getIndex)].dataset.speed);
};

let interval = setInterval(changeCase,rotator[[...rotator].findIndex(getIndex)].dataset.speed);