var hege = {
    title: 'Ice Cream Flavors',
    cost: 3.99,
    type: ['chocolate', 'vanilla', 'caramel', 'strawberry', 'watermelon']
  }

  var iceCream = {
    cost: 3.99,
    name: 'Ice Cream Flavors',
    type: ['chocolate', 'vanilla', 'caramel', 'strawberry', 'watermelon']
  }
  
  var sushi = {
    cost: 5.99,
    name: 'Sushi Combinations',
    type: ['Eel Roll', 'Philadelphia Roll', 'Spicy Salmon Handroll', 'Rainbow Roll', 'Special Roll']
  }
  
  var fruit = {
    cost: 1.99,
    name: 'Fruits', 
    type: ['cherry', 'watermelon', 'strawberry', 'cantaloupe', 'mangosteen']
  }
  
  
  console.log(iceCream.cost, iceCream.title, iceCream.type[2]); 
  //=> 3.99 ‘Ice Cream Flavors’ ‘caramel’

  function favThings({cost, name, type}) {
    var randomNum = Math.floor((Math.random() * 4) + 1);
    console.log(`Bunny loves her ${name}! She especially loves ${type[randomNum]} for only $${cost}!`);
  }
  
  // Randomly generated for the type parameter.
  // First time:
  favThings(iceCream) // => Bunny loves her Ice Cream Flavors! She especially loves caramel for only $3.99!
  favThings(sushi) // => Bunny loves her Sushi Combinations! She especially loves Philadelphia Roll for only $5.99!
  favThings(fruit) // => Bunny loves her Fruits! She especially loves cantaloupe for only $1.99!
  
  // Second time:
  favThings(iceCream) // => Bunny loves her Ice Cream Flavors! She especially loves vanilla for only $3.99!
  favThings(sushi) // => Bunny loves her Sushi Combinations! She especially loves Spicy Salmon Handroll for only $5.99!
  favThings(fruit) // => Bunny loves her Fruits! She especially loves mangosteen for only $1.99!
  
  // Try it in the console yourself and see what you get!