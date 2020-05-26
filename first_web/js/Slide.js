const next_btn = document.querySelector('.slide_btn');
const slide_list = document.querySelector('.slide_list');
const slide = 'slide_';
let move_size = -1;

function createBox(event) {
  move_size++;
  const slide_div = document.createElement('div');
  slide_div.classList.add('slide_content', `${slide + (move_size % 5)}`);
  slide_list.appendChild(slide_div);
  if (event) {
    slide_list.style.transition = 90 + 'ms';
    slide_list.style.transform = `translate(${-100 * move_size}px,0)`;
  }
}

next_btn.addEventListener('click', createBox);

function init() {
  createBox();
}

init();
