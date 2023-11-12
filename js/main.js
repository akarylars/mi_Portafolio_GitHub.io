//footer y nav dinámico//
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

nav.innerHTML= ` <ul class="nav px-4">
<li class="nav-item">
  <p class="navbar text-white">Portafolio.</p>
</li>
</ul>

<ul class="nav justify-content-end">
<li class="nav-item">
  <a class="nav-link text-white" href="index.html">Inicio</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white " href="cv.html">Currículum</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white " href="proyectos.html">Proyectos</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white" href="skills.html">Skills</a>
</li>
<li class="nav-item">
    <a class="nav-link text-white" href="contacto.html" >Contáctame</a>
  </li>
</ul>`;

footer.innerHTML= `<footer class="footy">
<p class="footerUno">Akary Larios (2023) </p>
</footer>`;
//termina nav y footer dinámico//

//validaciones regex de contacto

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false
}

