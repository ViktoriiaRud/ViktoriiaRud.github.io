$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
      {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      
    ]
  });


  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

// модальные окна

$('[data-modal=consultation]').on('click', function() {
 $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__clouse').on('click', function(){
  $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

// $('.button_mini').on('click', function(){
//   $('.overlay, #order').fadeIn('slow');
// });

$('.button_mini').each(function(i) {
 $(this).on('click', function() {
   $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
   $('.overlay, #order').fadeIn('slow');
 })
});
 
// валидация форм

function valideForm(form) {
  $(form).validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      }
  },
  messages: {
    name: "Пожалуйста, введите свое имя",
    phone: "Пожалуйста, введите свой номер телефона",
    email: {
      required: "Пожалуйста, введите свою почту",
      email: "Неправильно введен адрес почты"
        }
      }
    });
  };
  valideForm('#consultation-form');
  valideForm('#consultation form');
  valideForm('#order form');


// маска ввода
// $('input[name=phone]').mask("+3 (999) 999-99-99");
// не заработала ? закоментировала что б не мешала

// скрипт для отправки данных на сервер 
$('form').submit(function(e){
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("imput").val("");
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn('slow');

    $('form').trigger('reset');
  });
  return false;
});

  // Smooth scroll and pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

// скрипт для плавной прокрутки скроля
$("a[href=#up]").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

new WOW().init();
  
});







// валидация форм 
// если нужно ввести определенное число символов minlength: 2
// $('#consultation form').validate({
//   rules: {
//     name:  {
//       required: true,
//       minlength: 2
//     },
//     phone: "required",
//     email: {
//       required: true,
//       email: true
//     }
// },
// messages: {
//   name: {
//     required: "Пожалуйста, введите свое имя",
//     minlength: jQuery.validator.format("Введите {0} символов!")
//   },
//   phone: "Пожалуйста, введите свой номер телефона",
//   email: {
//     required: "Пожалуйста, введите свою почту",
//     email: "Неправильно введен адрес почты"
//   }
// }
//   });








