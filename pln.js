(function() {
  init();
  function init() {
    console.log('init');
    var elements = document.querySelectorAll('[data-gtmevent]');
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var event = element.dataset.gtmevent;
      var data = JSON.parse(element.dataset.gtmjson);
      switch (event) {
        case 'click':
          element.addEventListener('click', click.bind(null, data));
          break;
        case 'addToCart':
          element.addEventListener('click', addToCart.bind(null, data));
          break;
        default:
          break;
      }
    }
  }

  function click(data) {
    console.log('clicked', data);
    if(dataLayer) dataLayer.push(data);
  }

  function addToCart(data) {
    console.log('addToCart', data);
    if(dataLayer) dataLayer.push(data);
  }
})();
