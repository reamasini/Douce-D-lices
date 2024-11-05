const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

document.getElementById("enviarCorreo").addEventListener("click", function() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  
  var body = "Nombre: " + nombre + "\n" + "E-Mail: " + email + "\n\n" + mensaje;
  var mailtoLink = "mailto:am23-0154@unphu.edu.do?subject=Nuevo mensaje de contacto&body=" + encodeURIComponent(body);
  
  window.location.href = mailtoLink;
});

const modal = document.getElementById("politicasModal");
const btn = document.getElementById("politicasBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function showAlert(event) {
  event.preventDefault(); 
  if (confirm("Estás a punto de abrir otra página. ¿Deseas continuar?")) {
    window.open(event.target.closest("a").href, "_blank");
  }
}


const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const aboutUsImg = document.getElementById('about-us-img'); 

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    aboutUsImg.src = 'images/bakingdark (1).png'; 
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        aboutUsImg.src = 'images/bakingdark (1).png'; 
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        aboutUsImg.src = 'images/baking.png'; 
    }
});