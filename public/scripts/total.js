function typeHelper(text) {
  return text.match(/[^$]/g).join('') * 100;
}

function addToTotal(price) {
  const totalTd = $('.order-total');
  const oldTotal = typeHelper(totalTd.text());
  const add = typeHelper(price);
  const newTotal = (oldTotal + add) / 100;
  return '$' + newTotal;
}

function addToSubtotal(price) {
  const subTotalTd = $('.order-subtotal');
  const oldTotal = typeHelper(subTotalTd.text());
  const add = typeHelper(price);
  const tax = add / 20;
  const newTotal = ((oldTotal + add - tax) / 100).toFixed(2);
  return '$' + newTotal;
}

function addToTax(price) {
  const taxTd = $('.order-taxes');
  const oldTotal = typeHelper(taxTd.text());
  const add = (typeHelper(price) * 0.05);
  const newTotal = ((oldTotal + add) / 100).toFixed(2);
  return '$' + newTotal;
}


function subtractToTotal(price) {
  const totalTd = $('.order-total');
  const oldTotal = typeHelper(totalTd.text());
  const add = typeHelper(price);
  const newTotal = (oldTotal - add) / 100;
  return '$' + newTotal;
}

function subtractToTax(price) {
  const taxTd = $('.order-taxes');
  const oldTotal = typeHelper(taxTd.text());
  const add = (typeHelper(price) * 0.05);
  const newTotal = ((oldTotal - add) / 100).toFixed(2);
  return '$' + newTotal;
}

function subtractToSubtotal(price) {
  const subTotalTd = $('.order-subtotal');
  const oldTotal = typeHelper(subTotalTd.text());
  const add = typeHelper(price);
  const tax = add / 20;
  const newTotal = ((oldTotal - add + tax) / 100).toFixed(2);
  return '$' + newTotal;
}
