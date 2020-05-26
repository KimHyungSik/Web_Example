const test = document.querySelector('.main_logo');
const text = ['있', '어', '보', '이', '는', ' ', '웹', '이', '름'];
let countmax = text.length,
  count = 0;

function paintlogo() {
  if (countmax == count) {
    return;
  }
  const logoT = document.createElement('div');
  if (text[count] === ' ') {
    logoT.classList.add('main_logo__spaces');
  } else {
    logoT.classList.add('main_logo__text');
  }
  logoT.innerText = text[count];
  test.appendChild(logoT);
  count++;
}

function init() {
  setInterval(paintlogo, 200);
}

init();
