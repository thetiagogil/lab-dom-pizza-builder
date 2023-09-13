// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGrnPepper) => {
    if (state.greenPeppers) {
      oneGrnPepper.style.visibility = 'visible';
    } else {
      oneGrnPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((whiteSauce) => {
    if (state.whiteSauce) {
      whiteSauce.classList.add("sauce-white");
    } else {
      whiteSauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((crustGlutenFree) => {
    if (state.glutenFreeCrust) {
      crustGlutenFree.classList.add("crust-gluten-free");
    } else {
      crustGlutenFree.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  document.querySelectorAll('.btn-pepperoni').forEach((button) => {
    if (state.pepperoni) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.querySelectorAll('.btn-mushrooms').forEach((button) => {
    if (state.mushrooms) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.querySelectorAll('.btn-green-peppers').forEach((button) => {
    if (state.greenPeppers) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.querySelectorAll('.btn-sauce').forEach((button) => {
    if (state.whiteSauce) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.querySelectorAll('.btn-crust').forEach((button) => {
    if (state.glutenFreeCrust) {
      button.classList.toggle("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function renderPrice() {
  if (!state.pepperoni) {
    const lineToRemove = document.querySelector(".panel-price ul li:nth-child(1)");
    const subtract = +(document.querySelector(".panel-price strong")) - +(lineToRemove[1]);
    lineToRemove.remove()
    subtract.toString();
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});