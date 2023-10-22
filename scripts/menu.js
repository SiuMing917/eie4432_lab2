
$(document).ready(function () {
    $.get("https://siuming917.github.io/eie4432_lab2/assets/drink-menu.json", function (data) {
      // Success Case Handling Here
      console.log(data);
      data.forEach(function(drink) {
        // Construct the HTML for the drink card using template literals
        var cardHtml = `
          <div class="card">
            <img src="${drink.image}" class="card-img" alt="${drink.name}">
            <div class="card-body">
              <h5 class="card-name">${drink.name}</h5>
              <p class="card-type">${drink.type}</p>
              <p class="card-price">Price: $${drink.price}</p>
            </div>
          </div>
        `;
        // Append the constructed card to the "drink-menu" container
        $("#drink-menu").append(cardHtml);
      });
    }).fail(function (error) {
      // Fail Case Handling Here
      console.error(error);
    });
});