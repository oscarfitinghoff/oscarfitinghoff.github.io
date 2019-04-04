var btnAddToCart = document.querySelector('.js-addToCart');
var btnCheckout1 = document.querySelector('.js-checkout1');
var btnCheckout2 = document.querySelector('.js-checkout2');
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

btnCheckout1.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('btnCheckout1');
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

btnCheckout2.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('btnCheckout2');
  dataLayer.push({
    event: 'checkout',
    ecommerce: {
      checkout: {
        actionField: { step: '2', option: 'Osäker_1' },
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

  // ga('ec:setAction', 'purchase', {          // Transaction details are provided in an actionFieldObject.
  //   'id': 'T12345',                         // (Required) Transaction id (string).
  //   'affiliation': 'SRK',                   // Affiliation (string).
  //   'revenue': '35.43',                     // Revenue (currency).
  //   'tax': '0',                             // Tax (currency).
  //   'shipping': '0',                        // Shipping (currency).
  //   'coupon': 'SUMMER_SALE'                 // Transaction coupon (string).
  // });

  dataLayer.push({
    event: 'eec.purchase',
    ecommerce: {
      purchase: {
        actionField: {
          id: 'T123456',
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
