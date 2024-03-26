const cardNumber = document.getElementById("creditCardNumber");
const cardHolderName = document.getElementById("card-holder-name");
const cardNameInput = document.getElementById("creditCardName");
const displayValidity = document.getElementById("validity");
const validityMonthInput = document.getElementById("creditCardMonth");
const validityYearInput = document.getElementById("creditCardYear");
const cardNumberDisplay = document.querySelectorAll(".card-number-display");
const cvvInput = document.getElementById("creditCardCvc");
const cvvDisplay = document.getElementById("cvv-display");
let validityYearValue = "24";
let validityMonthValue = "01";
let currentSpanIndex = 0;
cardNumber.addEventListener("input", () => {
  const inputNumber = cardNumber.value.replace(/\D/g, "");
  cardNumber.value = cardNumber.value.slice(0, 16).replace(/\D/g, "");
  for (let i = 0; i < cardNumberDisplay.length; i++) {
    if (i < inputNumber.length) {
      cardNumberDisplay[i].textContent = inputNumber[i];
    } else {
      cardNumberDisplay[i].textContent = "_";
    }
  }

  if (inputNumber.length <= cardNumberDisplay.length) {
    currentSpanIndex = inputNumber.length;
  } else {
    currentSpanIndex = cardNumberDisplay.length;
  }
});

cardNameInput.addEventListener("input", () => {
  if (cardNameInput.value.length < 1) {
    cardHolderName.innerText = "Your Name Here";
  } else if (cardNameInput.value.length > 30) {
    cardNameInput.value = cardNameInput.value.slice(0, 30);
  } else {
    cardHolderName.innerText = cardNameInput.value;
  }
});

validityMonthInput.addEventListener("change", () => {
  validityMonthValue = validityMonthInput.value;

  //Final formatted string
  const formattedString = `${validityMonthValue}/${validityYearValue}`;
  displayValidity.innerText = formattedString;
});

validityYearInput.addEventListener("change", () => {
  validityYearValue = validityYearInput.value;

  //Final formatted string
  const formattedString = `${validityMonthValue}/${validityYearValue}`;
  displayValidity.innerText = formattedString;
});

/* validityInput.addEventListener("input", () => {
  const inputString = validityInput.value;
  if (inputString.length < 1) {
    displayValidity.innerText = "06/28";
    return false;
  }
  const parts = inputString.split("-");
  const year = parts[0].slice(2);
  const month = parts[1];

  //Final formatted string
  const formattedString = `${month}/${year}`;
  displayValidity.innerText = formattedString;
}); */

//cvv
cvvInput.addEventListener("input", () => {
  const userInput = cvvInput.value;
  const sanitizedInput = userInput.slice(0, 3);
  const numericInput = sanitizedInput.replace(/\D/g, "");
  cvvInput.value = numericInput;
  cvvDisplay.innerText = numericInput;
});

//Flip
/* cvvInput.addEventListener("click", () => {
  document.getElementById("card").style.transform = "rotateY(180deg)";
}); */
cvvInput.addEventListener("focus", () => {
  document.getElementById("card").style.transform = "rotateY(180deg)";
});
//Reflip card
document.addEventListener("click", () => {
  if (document.activeElement.id != "cvv") {
    document.getElementById("card").style.transform = "rotateY(0deg)";
  }
});

window.onload = () => {
  cvvInput.value = "";
  validityMonthInput.value = "";
  validityYearInput.value = "";
  cardNameInput.value = "";
  cardNumber.value = "";
};