$(document).ready(function() {
  $('.order-form-final').hide()
  $('.checkout-button').on('click', function(event) {
    $('.order-form-final').slideToggle()

  });
});
