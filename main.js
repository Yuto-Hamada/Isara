$('.answers').hide();

$(function () {
  $('.questions').on('click', function()
  {
    $(this).next().slideToggle(200);
    $(this).toggleClass('open', 200);
  });
});


$('.step-content-r').hide();

$(function () {
  $('step-content-l').on('click', function()
  {
    $(this).next().slideToggle(200);
    $(this).toggleClass('open', 200);
  });
});