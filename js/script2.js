/* global _ */

function ShoppingCart() {
  let _elements = [];

  let _findProductIndex = function(productId) {
    let indexShoppingCartItem = _elements.findIndex(function(shoppingCartItem) {
      return (shoppingCartItem.product.id === productId);
    });

    return indexShoppingCartItem;
  }

  return {
    toString: function() {
      return ("total value: " + this.calculateTotalPrice() +
        ", elements: " + JSON.stringify(_elements));
    },
    initialise: function(elements) {
      _elements = elements;
      return;
    },
    hasFruit: function(fruit) {
      return (_elements[_findProductIndex(fruit.id)].quantity !== 0);
    },
    getFruitQuantity: function(fruit) {
      return _elements[_findProductIndex(fruit.id)].quantity;
    },
    addFruit: function(fruit, quantity) {
      return (_elements[_findProductIndex(fruit.id)].quantity += quantity);
    },
    removeFruit: function(fruit, quantity) {
      return this.addFruit(fruit, -quantity);
    },
    setFruitQty: function(fruit, quantity) {
      return (_elements[_findProductIndex(fruit.id)].quantity = quantity);
    },
    calculateTotalPrice: function() {
      let totalPrice = 0;

      _elements.forEach(function(element) {
        totalPrice += (element.product.price * element.quantity);
      });

      return totalPrice;
    }
  };
}

let fruits = [{
  id: 1,
  name: "Bananas",
  description: "Best bananas from madeira",
  location: "Madeira, PRT",
  price: 5,
  img: "img/banana.png"
}, {
  id: 2,
  name: "Apples",
  description: "Finest apples from Spain",
  location: "Sevilha, ESP",
  price: 7,
  img: "img/apple.png"
}, {
  id: 3,
  name: "Pineapples",
  description: "Grown in a perfect climate",
  location: "Azores, PRT",
  price: 7,
  img: "img/pineapple.png"
}, {
  id: 4,
  name: "Oranges",
  description: "From the orange country",
  location: "Amsterdam, NLD",
  price: 2,
  img: "img/orange.png"
}];

let shoppingCart;

let fruitsObject = {};
fruits.forEach(function(fruit) {
  fruitsObject[fruit.id] = fruit;
});

$(document).ready(function() {
  shoppingCart = ShoppingCart();
  let fruitImageTemplate = _.template("<img class='js-fruitImage' fruit_id='<%= fruitId %>' src='<%= imgUrl %>'>");

  let shoppingCartElements = [];
  fruits.forEach(function(fruit) {
    $(".js-fruitList").append(fruitImageTemplate({
      fruitId: fruit.id,
      imgUrl: fruit.img
    }));

    shoppingCartElements.push({
      product: fruit,
      quantity: 0
    });
  });

  shoppingCart.initialise(shoppingCartElements);

  $(".js-fruitImage").click(function() {
    let fruitId = parseInt($(this).attr("fruit_id"));

    if(!shoppingCart.hasFruit(fruitsObject[fruitId])) {
      shoppingCart.addFruit(fruitsObject[fruitId], 1);

      let shoppingCartItemTemplate = _.template(
        "<div class='fruitDiv js-fruitDiv' fruit_id='<%= fruitId %>'>" +
        "<div><%= fruitName %></div>" +
        "<div><%= fruitDescription %></div>" +
        "<div><%= fruitLocation %></div>" +
        "<i class='material-icons js-remove'>remove</i>" +
        "<input class='js-price-input'>" +
        "<i class='material-icons js-add'>add</i>" +
        "<div>Price: <%= fruitPrice %></div>" +
        "</div>");

      $(".js-shoppingCart").append(shoppingCartItemTemplate({
        fruitId: fruitsObject[fruitId].id,
        fruitName: fruitsObject[fruitId].name,
        fruitDescription: fruitsObject[fruitId].description,
        fruitLocation: fruitsObject[fruitId].location,
        fruitPrice: fruitsObject[fruitId].price
      }));

      $(".js-remove").click(function() {
        if(shoppingCart.getFruitQuantity(fruitsObject[parseInt($(this).parent().attr("fruit_id"))]) > 0) {
          shoppingCart.removeFruit(fruitsObject[parseInt($(this).parent().attr("fruit_id"))], 1);          
        }

        $(".js-price-input").val(shoppingCart.getFruitQuantity(fruitsObject[parseInt($(this).parent().attr("fruit_id"))]));
      });

      $(".js-add").click(function() {
        shoppingCart.addFruit(fruitsObject[parseInt($(this).parent().attr("fruit_id"))], 1);

        $(".js-price-input").val(shoppingCart.getFruitQuantity(fruitsObject[parseInt($(this).parent().attr("fruit_id"))]));
      });

      $(".js-price-input").val(shoppingCart.getFruitQuantity(fruitsObject[parseInt($(".js-price-input").parent().attr("fruit_id"))]));
    }
    else if(shoppingCart.hasFruit(fruitsObject[fruitId])) {
      shoppingCart.addFruit(fruitsObject[fruitId], 1);

      $(".js-price-input").val(shoppingCart.getFruitQuantity(fruitsObject[parseInt($(".js-price-input").parent().attr("fruit_id"))]));
    }
  });

});
