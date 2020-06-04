const slider = document.querySelector(".slide_limit__ul");
const limit_next_btn = document.querySelector(".next_btn");
const limit_limit_Previous_btn = document.querySelector(".Previous_btn");

let position = 1,
  loc = 0;

function next(event) {
  if (position < 5) {
    loc -= 100;
    slider.style.transform = `translate(${loc}px,0)`;
    limit_limit_Previous_btn.style.display = "block";
    position++;
  }
  if (position == 5) {
    limit_next_btn.style.display = "none";
  }
}

function previous(event) {
  if (position > 1) {
    loc += 100;
    limit_next_btn.style.display = "block";
    slider.style.transform = `translate(${loc}px,0)`;
    position--;
  }
  if (position == 1) {
    limit_limit_Previous_btn.style.display = "none";
  }
}

limit_next_btn.addEventListener("click", next);
limit_limit_Previous_btn.addEventListener("click", previous);

function init() {
  limit_limit_Previous_btn.style.display = "none";
}

init();
