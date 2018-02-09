$(document).ready(function() {
  const addButtons = $('.add-item');
  addButtons.click(function() {

    // price of parent .price and name of parent .name
    const price = $(this).siblings('.price').text();
    const name = $(this).siblings('.name').text();
    console.log(name);

    const row = $('<tr/>', {
      'class': 'order-item'
    });
    console.log(row)
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
      'class': 'cancel-item'
    });
    $(cancel).append(document.createTextNode('Remove'))
    //event handler for removing the added item
    $(cancel).on('click', function() {
      $(this).closest('.order-item').remove()
    });

    $(itemPrice).append(document.createTextNode(price));
    $(row).append(itemPrice);
    $(row).append(cancel)
    $('.order-list').append(row);

    $();
  });
});
