var cartCounter = document.querySelector("#cart-count");
var cartBtnOne = document.querySelector(".cart-btn-one");
var cartBtnTwo = document.querySelector(".cart-btn-two");
var cartBtnThree = document.querySelector(".cart-btn-three");
var cartBtnFour = document.querySelector(".cart-btn-four");
var cartBtnFive = document.querySelector(".cart-btn-five");
var cartBtnSix = document.querySelector(".cart-btn-six");
var submitReviewBtn = document.querySelector("#submit-review-btn");
var emailInput = document.querySelector("#email-field");
var reviewForm = document.querySelector("#review-form")
var reviewBlock = document.querySelector("#review-bottom-block");

var count = 0;

function pizzaInCart() {
  count = count + 1;
  cartCounter.textContent = count;
}

cartBtnOne.addEventListener("click", pizzaInCart);
cartBtnTwo.addEventListener("click", pizzaInCart);
cartBtnThree.addEventListener("click", pizzaInCart);
cartBtnFour.addEventListener("click", pizzaInCart);
cartBtnFive.addEventListener("click", pizzaInCart);
cartBtnSix.addEventListener("click", pizzaInCart);

function reviewSubmitHandler() {
  var confirmationMsg = document.createElement("p");
  confirmationMsg.textContent = "Thank you for your review! A confirmation message was sent to: " + emailInput.value;
  reviewForm.remove();
  reviewBlock.appendChild(confirmationMsg);
}
 
submitReviewBtn.addEventListener("click", reviewSubmitHandler);