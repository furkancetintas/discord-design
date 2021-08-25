const imgBtn = document.querySelector('.picture');
const ulElement = document.querySelector('ul');
const liBtns = document.querySelectorAll('.btn');
const durumNe = document.getElementById('durum_ne');

const btnIcons = document.querySelectorAll('.btn-icons');
const spanElements = document.querySelectorAll('.deneme');
const mic = document.getElementById('mic');
const headphones = document.getElementById('headphones');

function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  ulElement.classList.remove('active');
}
liBtns.forEach((n) => n.addEventListener('click', linkAction));

const durums = [
  '<i class="bi bi-circle-fill"></i>',
  '<i class="bi bi-moon-fill"></i>',
  '<i class="bi bi-dash-circle-fill"></i>',
  '<i class="bi bi-record-circle-fill"></i>',
];

imgBtn.addEventListener('click', function () {
  ulElement.classList.toggle('active');
});

for (let i = 0; i < liBtns.length; i++) {
  const button = liBtns[i];
  button.addEventListener('click', function () {
    liBtns.forEach((btn) => {
      btn.classList.remove('active');
      button.classList.add('active');
    });
  });
  liBtns[i].onclick = function () {
    durumNe.innerHTML = durums[i];
  };
}

for (let index = 0; index < btnIcons.length; index++) {
  const btnIcon = btnIcons[index];
  btnIcon.addEventListener('click', function () {
    for (let index2 = 0; index2 < spanElements.length; index2++) {
      const spanElement = spanElements[index2];
      spanElement.classList.toggle('passive');
    }
  });
}
