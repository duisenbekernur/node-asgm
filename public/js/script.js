// public/js/script.js

function getBmi() {
  const bmiForm = document.getElementById("bmiForm");

  // Collect form data
  const formData = new URLSearchParams(new FormData(bmiForm));

  // Make a POST request to the server
  console.log([...formData]);
  fetch("http://localhost:3000/bmicalculator", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Update HTML with BMI result
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `<p>Your BMI is: ${data.bmi}</p><p>${data.message}</p>`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
