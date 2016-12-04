document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-menu]').onclick = function(){
      console.log('CLICKED');
  };
})
