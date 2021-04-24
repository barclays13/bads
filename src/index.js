import './style/style.less';

const order = document.querySelector('#order');

window.addEventListener("click", (e) => {
    if (e.target.classList.contains('button') || e.target.classList.contains('button-name')) {
        window.scrollTo(0,(order.getBoundingClientRect().top + pageYOffset))
    }
})
