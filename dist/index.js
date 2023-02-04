window.onload = function(){
  const mybutton = document.getElementById('backToTop');
  console.log(mybutton)
  mybutton.addEventListener("click", backToTop);
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}