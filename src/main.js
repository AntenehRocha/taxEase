$(document).ready(function () {
  loadTestimonials();

  $("#dark-mode").click(function () {
    $("body").toggleClass("dark-mode-page");
  });
});

function loadTestimonials() {
  $.getJSON("https://randomuser.me/api/?results=6", function (data) {
    const usuarios = data.results;

    $(".testimonial-card").each(function (index) {
      $(this).html(`
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

    $(".login-container").show();
  });
}
