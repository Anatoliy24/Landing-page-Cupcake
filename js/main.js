
$(document).ready(function ($) {

  // accordeon


  $(".accordeon__desc").hide().prev().click(function() {
    $(".accordeon__desc").not(this).slideUp();
    $(this).next().not(":visible").slideDown();
    $(this).removeClass('accordeon__title_active')
    $(".accordeon__title-text").removeClass('accordeon__title_active')
    $(this).toggleClass('accordeon__title_active');

  });

  // bx-slider

    $('.section-test').bxSlider();

  // tabs-plugin


  $(function(){

    $(".tabs").on("click", ".header-team__item", function(){

      var tabs = $(".tabs .header-team__item"),
        cont = $(".tabs .content-team__block");

      // Удаляем классы active
      tabs.removeClass("active");
      cont.removeClass("active");
      // Добавляем классы active
      $(this).addClass("active");
      cont.eq($(this).index()).addClass("active");

      return false;
    });
  });


});

ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
    controls: []
  });
  myMap.behaviors.disable("scrollZoom");


  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Москва',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/section_map/bal.png',
    iconImageSize: [42, 59],
    iconImageOffset: [-5, -38]
  });
  myMap.geoObjects
    .add(myPlacemark);


}