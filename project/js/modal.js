// modal 

const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('#btn-get');
const closeModalBtn = document.querySelector('.modal_close');

const open = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const close = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

openModalBtn.onclick = open;
closeModalBtn.onclick = close;


modal.onclick = (event) => {
    if (event.target === modal) close();
};

setTimeout(() => {
    open();
}, 10000);


function checkScroll() { 
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        open();
        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);