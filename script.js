const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener('click', () => {
  const desktopBar = document.getElementById('desktop_bar');
  const myShot = document.getElementById('picture');
  desktopBar.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  myShot.classList.toggle('active');
});
const displayCard = document.getElementById('display_card');
displayCard.addEventListener('click', () => {
  const pictureCard = document.getElementById('speaker_picture_two');

  pictureCard.classList.toggle('show_card');
  displayCard.classList.toggle('hide_botton');
});
const joinGlobal = document.getElementById('join_global');
joinGlobal.innerHTML = 'SEE THE WHOLE PROGRAM';