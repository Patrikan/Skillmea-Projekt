function scrollToForm() {
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}


function scrollToTop() {
    document.getElementById("uvodni-sekce").scrollIntoView({ behavior: "smooth" });
  }

const arrow = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = "none";
    }
  });
  
// Defaultně skryto
  arrow.style.display = "none";

  document.getElementById('translateBtn').addEventListener('click', function () {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = 'en';
      select.dispatchEvent(new Event('change'));
    }
  });


  
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Chyba při načítání footeru:', error));
