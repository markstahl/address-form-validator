let addressForm = document.shippingAddressForm;
let elements = shippingAddressForm.elements;
let empty = [];
addressForm.addEventListener('submit', (event) => {
  event.preventDefault();

  for (var i = 0; i < elements.length-1; i++)
  {
    if (elements[i].value == "")
    {
      empty.push(elements[i]);
    }
  }

for (var i = 0; i < empty.length; i++) {
  document.getElementById(empty[i].id).style.border = '1px solid red';
  }

});
