// window.addEventListener('scroll', addScrollBar)
window.onscroll = function() {addScrollBar()};

let bd = document.body


function addScrollBar() {
    bd.classList.add('on-scrollbar')

}
function removeScrollBar() {
    bd.classList.remove('on-scrollbar');
}

setInterval(removeScrollBar, 1000);
