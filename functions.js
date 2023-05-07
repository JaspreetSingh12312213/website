function sendEmail(event) {
    event.preventDefault(); // prevent the form from submitting
    // get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // create an email message
    const emailMessage = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    // send the email (replace this with your own email sending code)
    console.log("Sending email:", emailMessage);
    alert("Thank you for your message!");
  }
  function calculateBMI(event) {
event.preventDefault();

const height = parseInt(document.getElementById("height").value);
const weight = parseInt(document.getElementById("weight").value);

const bmi = weight / ((height/100) ** 2);
const result = document.getElementById("result");

if (bmi < 18.5) {
result.innerText = `Your BMI is ${bmi.toFixed(1)}. You are underweight.`;
} else if (bmi < 25) {
result.innerText = `Your BMI is ${bmi.toFixed(1)}. You have a normal weight.`;
} else if (bmi < 30) {
result.innerText = `Your BMI is ${bmi.toFixed(1)}. You are overweight.`;
} else {
result.innerText = `Your BMI is ${bmi.toFixed(1)}. You are obese.`;
}
}


window.addEventListener("scroll", function() {
    var myDiv = document.getElementById("banner");
    if (window.pageYOffset > 100) {
      myDiv.classList.add("round");
    } else {
      myDiv.classList.remove("round");
    }
  });
  
  