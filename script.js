document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll("a[href^='#']");
  for (let anchorLink of anchorLinks) {
    anchorLink.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Example: Display an alert when the page loads
  alert("Welcome to our dropshipping website!");

  

  // Example: Fetch data from an API and display it on the page
  fetch("https://api.example.com/products")
    .then((response) => response.json())
    .then((data) => {
      const productsContainer = document.getElementById("featured-products");

      data.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const imageElement = document.createElement("img");
        imageElement.src = product.imageUrl;
        imageElement.alt = product.name;
        productElement.appendChild(imageElement);

        const titleElement = document.createElement("h3");
        titleElement.textContent = product.name;
        productElement.appendChild(titleElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = product.description;
        productElement.appendChild(descriptionElement);

        const learnMoreLink = document.createElement("a");
        learnMoreLink.href = product.link;
        learnMoreLink.textContent = "Learn More";
        productElement.appendChild(learnMoreLink);

        productsContainer.appendChild(productElement);
      });
    })
    .catch((error) => {
      console.log("An error occurred while fetching product data:", error);
    });

  // Example: Form submission handling
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Process form data
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Example: Display form data in the console
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Example: Show a success message on the page
    const successMessage = document.createElement("p");
    successMessage.textContent = "Thank you for your message! We will get back to you soon.";
    contactForm.appendChild(successMessage);

    // Clear form fields
    contactForm.reset();
  });
});
