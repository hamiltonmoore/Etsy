// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it




// 1: Show me how to calculate the average price of all items.
function question1() {
  var allPrices = 0;
  var avgPrice = 0;

  for (let i = 0; i < data.length; i++) {
    allPrices = allPrices + data[i].price;

  }
  avgPrice = (allPrices / data.length);
  console.log(avgPrice);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  var itemsBetween = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      itemsBetween.push(data[i].title);
    }
  }
  console.log(itemsBetween.join("\n"));
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  var gbp = [];
  var price = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      gbp.push(data[i].title);
      price.push(data[i].price);

    }
  }
  console.log(gbp + " costs " + price + " pounds.");
}


// 4: Display a list of all items that are made of wood.
function question4() {
  // Answer:
  var madeOfWood = [];

  // for (i = 0; i < data.length; i++) {
  for (i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood")) {
      madeOfWood.push(data[i].title + " is made of wood.");
    }
  }
  console.log(madeOfWood.join("\n"));
}




// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  var eightOrMore = [];

  for (i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      eightOrMore.push(data[i]);
    }
  }

  for (var i = 0; i < eightOrMore.length; i++) {
    console.log(eightOrMore[i].title + " has " + eightOrMore[i].materials.length + " materials");
    eightOrMore[i].materials.forEach(function (ele) {
      console.log("-", ele);
    });
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  var qty = [];


  for (i = 0; i < data.length; i++) {
    if (data[i].who_made.includes("i_did")) {
      qty.push(data[i].who_made);

    }
  }
  console.log(qty.length + " items were made by their sellers.")
}







