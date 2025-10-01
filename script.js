document.getElementById("calculatorForm").addEventListener("submit", function(e) {
  e.preventDefault();
  calculatePrice();
});

function calculatePrice() {
  let kgPrice = document.getElementById("kgPrice").value;
  let weight = document.getElementById("weight").value;

  if (!kgPrice || !weight) {
    document.getElementById("result").innerText = "Please enter both values";
    return;
  }

  let price = (kgPrice / 1000) * weight;
  document.getElementById("result").innerText =
    `Price for ${weight} g: ₹${price.toFixed(2)}`;
}

function resetCalculator() {
  document.getElementById("kgPrice").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").innerText = "Enter kg price and weight above";
}
