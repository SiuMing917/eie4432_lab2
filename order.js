function calculatePrice() {
    var sizeOptions = document.getElementsByName("size");
    var drinkOption = document.getElementById("drink");
    var price = 0;
  
    if (drinkOption.value != "") {
      // Check the selected drink using conditional statements
      if (drinkOption.value == "Bubble_Milktea") {
        price = 10;
      } else if (drinkOption.value == "Iced_Latte") {
        price = 12;
      } else if(drinkOption.value == "white_Coffee"){
        price = 11;
      }
  
      // Check the selected size using conditional statements
      for (var i = 0; i < sizeOptions.length; i++) {
        if (sizeOptions[i].checked) {
          if (sizeOptions[i].value == "small") {
            price += 0;
          } else if (sizeOptions[i].value == "medium") {
            price += 5;
          } else if (sizeOptions[i].value == "large") {
            price += 10;
          }
        }
      }
  
      // Display the calculated price
      var priceElement = document.getElementById("price");
      priceElement.textContent = price;
    } else {
      // Show an alert message asking the user to select a drink
      alert("Please select a drink.");
  
      // Clear the selected size by unchecking all the radio buttons
      for (var i = 0; i < sizeOptions.length; i++) {
        sizeOptions[i].checked = false;
      }
  
      // Clear the displayed price
      var priceElement = document.getElementById("price");
      priceElement.textContent = 0;
    }
  }


  function validateForm() {
    var nameInput = document.getElementById("name");
    var drinkOption = document.getElementById("drink");
    var sizeOptions = document.getElementsByName("size");
    var iceOptions = document.getElementsByName("ice");
    var sweetnessOptions = document.getElementsByName("sweetness");
  
    // Obtain all form values
    var name = nameInput.value.trim();
    var drink = drinkOption.value;
    var size = null;
    var ice = null;
    var sweetness = null;
  
    // Check if the name field is empty
    if (name == "") {
      alert("Please enter your name.");
      return false; // Prevent form submission
    }
  
    // Check if a drink is selected
    if (drink == "") {
      alert("Please select a drink.");
      return false; // Prevent form submission
    }
  
    // Check if a size is selected
    for (var i = 0; i < sizeOptions.length; i++) {
      if (sizeOptions[i].checked) {
        size = sizeOptions[i].value;
        break;
      }
    }
    if (!size) {
      alert("Please select a size.");
      return false; // Prevent form submission
    }
  
    // Check if an ice level is selected
    for (var i = 0; i < iceOptions.length; i++) {
      if (iceOptions[i].checked) {
        ice = iceOptions[i].value;
        break;
      }
    }
    if (!ice) {
      alert("Please select an ice preference.");
      return false; // Prevent form submission
    }
  
    // Check if a sweetness level is selected
    for (var i = 0; i < sweetnessOptions.length; i++) {
      if (sweetnessOptions[i].checked) {
        sweetness = sweetnessOptions[i].value;
        break;
      }
    }
    if (!sweetness) {
      alert("Please select a sweetness level.");
      return false; // Prevent form submission
    }
  
    // Form is completely filled, allow form submission
    return true;
  }

  function placeOrder(event) {
    // Step 25: Prevent the default form submission behavior
    event.preventDefault();
  
    // Step 26: Check if the form is validated
    if (validateForm()) {
      // Step 27: Obtain all form values
      var names = document.getElementById("name").value;
      var drinks = document.getElementById("drink").value;
      var sizes;
      var ices;
      var sweetnesss;

      for (var i = 0; i < 3; i++) {
        if (document.getElementsByName("size")[i].checked) {
          sizes = document.getElementsByName("size")[i].value;
          break;
        }
      }

      for (var i = 0; i < 3; i++) {
        if (document.getElementsByName("ice")[i].checked) {
          ices = document.getElementsByName("ice")[i].value;
          break;
        }
      }
      
      for (var i = 0; i < 3; i++) {
        if (document.getElementsByName("sweetness")[i].checked) {
          sweetnesss = document.getElementsByName("sweetness")[i].value;
          break;
        }
      }
  
      // Step 28: Group all data into an array
      var orderData = [names, drinks, sizes, ices, sweetnesss];
  
      // Step 29: Save the order data to localStorage
      localStorage.setItem("orders", JSON.stringify(orderData));
  
      // Step 30: Display a confirmation message
      alert("Order placed successfully! Thank you for your order.");

      document.getElementById("order-form").reset();
  
      // Step 32: Update the price display (optional)
      document.getElementById("price").textContent = "0";
    }
}