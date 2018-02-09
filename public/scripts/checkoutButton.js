



// checkout on click
// div for checkout
// information for checkout
// placeholder inputs for checkout
// form button for issuing order

function ccFormInputs() {
  const holder = $('<p/>');
  const cc = $("<label for='cc'>CC</label><input type='text' id='cc'>");
  const name = $("<label for='cc-name'>name</label><input type='text' id='cc-name'>");
  const expiry = $("<label for='cc-expiry'>Expiry</label><input id='cc-expiry' name='expiry' type='month'>");
  const ccv = $("<label for='cc-ccv'>CCV</label><input id='cc-ccv'  type='text' maxlength='3'>")

  holder.append(cc);
  holder.append(name);
  holder.append(expiry);
  holder.append(ccv);
  return holder;
}


function checkoutDiv() {
  const checkout = $('<div/>', {
    'class': 'checkout-div'
  });
  checkout.append(ccFormInputs());
  return checkout;
}

$(document).ready(function() {
  $('.checkout-button').on('click', function(event) {
    $(this).closest('aside').append(checkoutDiv())
  })
});
