$(document).ready(function() {
  const addButtons = $('.add-item');
  addButtons.click(function() {

    // price of parent .price and name of parent .name
    const price = $(this).siblings('.price').text();
    $('.order-total').text(addToTotal(price));
    $('.order-taxes').text(addToTax(price));
    $('.order-subtotal').text(addToSubtotal(price))
    const name = $(this).siblings('.name').text();

    const row = $('<tr/>', {
      'class': 'order-item'
    });
    console.log(row);
    const itemName = $('<td/>', {
      'class': 'order-name'
    });
    $(itemName).append(document.createTextNode(name));
    $(row).append(itemName);
    const itemPrice = $('<td/>', {
      'class': 'order-price'
    });

    //button for removing item from table
    const cancel = $('<button/>', {
      'class': 'cancel-item',
      'type': 'button'
    });
    $(cancel).append(document.createTextNode('Remove'));
    //event handler for removing the added item
    $(cancel).on('click', function() {
      $('.order-total').text(subtractToTotal(price));
    $('.order-taxes').text(subtractToTax(price));
    $('.order-subtotal').text(subtractToSubtotal(price))
      /*let price = $(this).siblings('.order-price').text()*/
      $(this).closest('.order-item').remove();

    });

    $(itemPrice).append(document.createTextNode(price));
    $(row).append(itemPrice);
    $(row).append(cancel);
    $('.order-list').append(row);
  });
});
