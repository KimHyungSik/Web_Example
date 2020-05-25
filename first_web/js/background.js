const body = document.querySelector('body');
const Img = document.createElement('img');

function background() {
  Img.classList.add('baImge');
  Img.src = '../img/dog.jpg';
  body.appendChild(Img);
}

function init() {
  background();
  setTimeout(function () {
    Img.classList.add('moveDogani');
  }, 2000);
}

init();
