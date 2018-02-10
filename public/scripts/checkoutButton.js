// instantiates cc inputs
function ccFormInputs() {
  const holder = $('<div/>', {
    'class': 'cc-holder mx-sm-3 mb-2'
  });
  const cc = $("<label for='cc'>CC</label><input type='text' id='cc'>");
  const name = $("<label for='cc-name'>name</label><input type='text' id='cc-name'>");
  const expiry = $("<label for='cc-expiry'>Expiry</label><input id='cc-expiry' name='expiry' type='month'>");
  const ccv = $("<label for='cc-ccv'>CCV</label><input id='cc-ccv'  type='text' maxlength='3'>");

  holder.append(cc);
  holder.append(name);
  holder.append(expiry);
  holder.append(ccv);
  return holder;
}

function confirmButton() {
  const confirm = $('<button/>', {
    'type': 'submit',
    'class': 'confirm-order',
    'form': 'submit-order'
  });
  $(confirm).append(document.createTextNode('Submit Order'));
  return confirm;
}

// instantiates checkout div
function checkoutDiv() {
  const checkout = $('<div/>', {
    'class': 'checkout-div'
  });
  checkout.append(ccFormInputs());
  checkout.append(confirmButton());
  return checkout;
}

$(document).ready(function() {
  $('.checkout-button').on('click', function(event) {
    //if cc holder already exists dont do
    if (!$('.cc-holder').length) {
      $(this).closest('aside').append(checkoutDiv());
    }
  });
});
