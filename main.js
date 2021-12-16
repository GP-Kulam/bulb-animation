const toggler = document.querySelector('.button');
const on = document.querySelector('.on');
const off = document.querySelector('.off');
toggler.addEventListener('click', () => {
    toggler.classList.toggle("active");
    off.classList.toggle("active-in");
    on.classList.toggle("active-out");
    document.getElementById('h').classList.toggle('a');
});