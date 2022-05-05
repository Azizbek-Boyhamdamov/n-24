const elNotificationCtaBtn = document.querySelector('.button-orang');
const elModalCloser = document.querySelector('.modal__closer');
const elModal = document.querySelector('.modal');

elModalCloser.addEventListener('click', function(){
  elModal.classList.remove('modal-opener');
});

elNotificationCtaBtn.addEventListener('click', function(){
  elModal.classList.add('modal-opener');
});