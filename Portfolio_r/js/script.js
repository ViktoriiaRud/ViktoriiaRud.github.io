const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


// скрипт для автоматического подсчета процентов в макете сделала самостоятельно 
// без использования скрипта. Скрипт для примера.

const counters = dokument.querySelectorAll('.progress__percent'),
   lines = dokument.querySelectorAll('.progress__color-yellow_95 span');

   counters.forEach((item, i) => {
       lines[i].style.width = item.innerHTML;
   });
