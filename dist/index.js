window.onload = function () {
  const mybutton = document.getElementById('backToTop');
  console.log(mybutton);
  mybutton.addEventListener('click', backToTop);
};

function backToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
