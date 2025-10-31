// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('vacation');
  const destination = document.getElementById('destination');
  const travelers = document.getElementById('number');

  form.addEventListener('submit', function (event) {
    // Clear any previous error messages
    clearErrors();

    let valid = true;

    // Validate destination
    if (destination.value === "") {
      showError(destination, "Please choose a destination.");
      valid = false;
    }

    // Validate number of travelers
    if (travelers.value <= 0) {
      showError(travelers, "Number of travelers must be greater than 0.");
      valid = false;
    }

    // Prevent submission if invalid
    if (!valid) {
      event.preventDefault();
    }
  });

  // Clear error for 'Number of Travelers' when value changes
    travelers.addEventListener('input', function() {
        // Only clear this specific error if the value becomes valid (> 0)
        if (this.value > 0) {
            clearSpecificError(this);
        }
    });

    // Clear error for 'Destination' when a selection is made
    destination.addEventListener('change', function() {
        // Only clear this specific error if a non-empty option is selected
        if (this.value !== "") {
            clearSpecificError(this);
        }
    });

  // Function to show inline error messages
  function showError(input, message) {
    let error = document.createElement("div");
    error.className = "error-message";
    error.textContent = message;
    input.parentElement.appendChild(error);
    input.classList.add("error");
  }

  // Function to clear previous errors
  function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());

    const inputs = document.querySelectorAll(".error");
    inputs.forEach(input => input.classList.remove("error"));
  }
});
