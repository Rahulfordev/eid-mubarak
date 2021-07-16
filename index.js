let stars = document.getElementById('stars');
let stars2 = document.getElementById('stars2');
let moon = document.getElementById('moon');
let rock = document.getElementById('rock');
let masjid = document.getElementById('masjid');
let text = document.getElementById('text');
let header = document.getElementById('header');
window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.bottom = value * 0.05 + '%';
  stars2.style.bottom = value * 0.025 + '%';
  moon.style.bottom = value * -0.5 + 'px';
  rock.style.bottom = value * -0.75 + 'px';
  masjid.style.bottom = value * -0.15 + 'px';

  text.style.right = -100 + value * 0.5 + '%';
  text.style.top = 50 + value * 0.1 + '%';

  header.style.top = value * 0.5 + 'px';
});

const menu = document.querySelector('#mobile-menu');
const navigat = document.querySelector('.navigation');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  navigat.classList.toggle('active');
});

let btn = document.querySelector('.btn');
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');
let confe = document.querySelector('#my-canvas');

btn.onclick = function () {
  popup.classList.add('active');
  confe.classList.add('active');
};

close.onclick = function () {
  popup.classList.remove('active');
  confe.classList.remove('active');
};

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
