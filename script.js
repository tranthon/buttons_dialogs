const pageWrapper = document.querySelector('.page-wrapper');
const btnCancel = document.querySelector('.button-cancel');
const btnAccept = document.querySelector('.button-accept');
const dlgCancel = document.querySelector('.dialog-cancel');
const dlgAccept = document.querySelector('.dialog-accept');

function clearDialog() {
  document.querySelectorAll('.dialog').forEach(function(dlg, i) {
    if(dlg.classList.contains('is-displayed')) {
      dlg.classList.remove('is-displayed');
    }
  });
}

pageWrapper.addEventListener('click', function(e) {
  if(e.target.classList.contains('buttons-container')) {
    clearDialog();
  }
});

btnCancel.addEventListener("click", function() {
  dlgCancel.classList.add("is-displayed");
  setTimeout(function() {
    clearDialog();
  }, 8000)
});

btnAccept.addEventListener("click", function() {
  dlgAccept.classList.add("is-displayed");
  setTimeout(function() {
    clearDialog();
  }, 8000)
});