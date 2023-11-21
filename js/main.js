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