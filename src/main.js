$(document).ready(function () {
  loadTestimonials();

  $("#dark-mode").click(function () {
    $("body").toggleClass("dark-mode-page");
  });
});

function loadTestimonials() {
  $.getJSON("https://randomuser.me/api/?results=6", function (data) {
    // este es el enlace a la API de usuarios aleatorios
    const usuarios = data.results;

    $(".testimonial-card").each(function (index) {
      $(this)
        .html(` // aqui se añade el html que ya tiene en el archivo .css los estilos para cada clase, así cada vez que se le de click se añadira el HTML
        <details>
          <summary>
            <p class="testimonial-name">${usuarios[index].name.first} ${usuarios[index].name.last}</p>
          </summary>
          <div class="testimonial-content">
            <img class="profile-pic" src="${usuarios[index].picture.medium}" alt="${usuarios[index].name.first} ${usuarios[index].name.last}">
            <div class="testimonial-text">
              <p>${usuarios[index].name.first} ${usuarios[index].name.last}</p>
              <p>${usuarios[index].email}</p>
            </div>
          </div>
        </details>
      `);
    });
  });

  $(".btn-secondary").click(function () {
    // esta es una funcionalidad aparte que viene siendo lo mismo, pero esta vez se añade un formulario de inicio de sesión, y se muestra al hacer click en el botón "Iniciar Sesión"
    $(".login-container").html(`
      <h2>Iniciar Sesión</h2>
      <form>
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Iniciar Sesión</button>
      </form>
    `);

    $(".login-container").show(); // esto muestra el formulario de inicio de sesión al hacer click en el botón "Iniciar Sesión"
  });
}
