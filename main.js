const imgBtn = document.querySelector('.picture');
const ulElement = document.querySelector('ul');
const liBtns = document.querySelectorAll('.btn');
const durumNe = document.getElementById('durum_ne');

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
