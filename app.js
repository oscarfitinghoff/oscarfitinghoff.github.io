var btnAddToCart = document.querySelector('.js-addToCart');
var btnCheckout = document.querySelector('.js-checkout');
var btnPurchase = document.querySelector('.js-purchase');
btnAddToCart.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('btnAddToCart');
  dataLayer.push({
    event: 'addToCart',
    ecommerce: {
      currencyCode: 'SEK',
      add: {
        products: [
          {
            name: 'Gåva 1',
            id: '12345',
            price: '200',
            brand: 'Privat',
            category: 'TestGåvor',
            quantity: 1
          }
        ]
      }
    }
  });
});

btnCheckout.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('btnCheckout');
  dataLayer.push({
    event: 'checkout',
    ecommerce: {
      checkout: {
        actionField: { step: '1', option: 'Osäker_1' },
        products: [
          {
            name: 'Gåva 1',
            id: '12345',
            price: '200',
            brand: 'Privat',
            category: 'TestGåvor',
            quantity: 1
          }
        ]
      }
    },
    eventCallback: function() {
      console.log('checkout callback');
      // document.location = 'checkout.html';
      // if (cb) cb();
    }
  });
});

btnPurchase.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('btnPurchase');
  dataLayer.push({
    ecommerce: {
      purchase: {
        actionField: {
          id: 'T12345',
          affiliation: 'SRK',
          revenue: '35.43',
          tax: '0',
          shipping: '0',
          coupon: 'SUMMER_SALE'
        },
        products: [
          {
            name: 'Gåva 1',
            id: '12345',
            price: '200',
            brand: 'Privat',
            category: 'TestGåvor',
            quantity: 1
          }
        ]
      }
    }
  });
});
