const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });   
    if (response.ok) {
      form.reset();
    }
  } catch (error) {
    console.error("Error:", error);
  }
});