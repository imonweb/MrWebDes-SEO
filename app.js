const menu = document.querySelector('#menu-btn');
const nav = document.querySelector('.header .navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  nav.classList.toggle('active');
}

const themeBtn = document.querySelector('#theme-btn');
themeBtn.onclick = () => {
  themeBtn.classList.toggle('fa-sun');

  if(themeBtn.classList.contains('fa-sun')){
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  nav.classList.remove('active');
}