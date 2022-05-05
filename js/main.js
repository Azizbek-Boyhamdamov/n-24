
const elModal = document.querySelector('.modal');
const elModalCloser = elModal.querySelector('.js-modal-closer');

if(elModalCloser){
  elModalCloser.addEventListener('click', function(){
    elModal.classList.remove('modal-opener');
  });
}

if(elModal){
  setTimeout(function(){
    elModal.classList.add('modal-opener');
  },30000);

}
