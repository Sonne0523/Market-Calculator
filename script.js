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
