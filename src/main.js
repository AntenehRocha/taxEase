$(document).ready(function () {
  loadTestimonials();

  $("#dark-mode").click(function () {
    $("body").toggleClass("dark-mode-page");
  });

  const $body = $("body");
  const $navToggle = $(".nav-toggle");
  const $siteNav = $("#site-nav");
  const $loginPanel = $("#login-panel");
  const $openLogin = $("#open-login");

  const $overlay = $("<div/>", {
    class: "ui-overlay",
    "aria-hidden": "true",
  }).appendTo(document.body);

  function setNavOpen(isOpen) {
    $body.toggleClass("nav-open", isOpen);
    $navToggle.attr("aria-expanded", String(isOpen));
    $navToggle.attr("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  }

  function ensureLoginMarkup() {
    if ($loginPanel.children().length > 0) return;
    $loginPanel.html(`
      <h2>Iniciar sesión</h2>
      <form>
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" autocomplete="username" required>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" autocomplete="current-password" required>
        <button type="submit">Acceder</button>
      </form>
    `);
  }

  function setLoginOpen(isOpen) {
    ensureLoginMarkup();
    $body.toggleClass("login-open", isOpen);
    $overlay.toggleClass("is-visible", isOpen);
    $openLogin.attr("aria-expanded", String(isOpen));
    if (isOpen) setNavOpen(false);
    if (isOpen) $("#username").trigger("focus");
  }

  $navToggle.on("click", function () {
    setNavOpen(!$body.hasClass("nav-open"));
  });

  $siteNav.on("click", "a, button", function () {
    setNavOpen(false);
  });

  $openLogin.on("click", function () {
    setLoginOpen(!$body.hasClass("login-open"));
  });

  $overlay.on("click", function () {
    setLoginOpen(false);
    setNavOpen(false);
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      setLoginOpen(false);
      setNavOpen(false);
    }
  });
});

function loadTestimonials() {
  $.getJSON("https://randomuser.me/api/?results=6", function (data) {
    // este es el enlace a la API de usuarios aleatorios
    const usuarios = data.results;

    const quotes = [
      "Por fin veo el IVA e IRPF con claridad. Lo reviso en 2 minutos y me olvido.",
      "El cierre de trimestre dejó de ser un caos. Todo queda ordenado y exportable.",
      "Me transmite confianza: datos claros, sin ruido, y un soporte que responde.",
      "Me ayudó a detectar gastos deducibles que estaba perdiendo cada mes.",
      "La vista de caja me dio control real. Ahora decido con datos, no con intuición.",
      "Sencillo, serio y rápido. Es justo lo que quería para mi negocio.",
    ];

    $(".testimonial-card").each(function (index) {
      // aqui se añade el html que ya tiene en el archivo .css los estilos para cada clase, así cada vez que se le de click se añadira el HTML
      $(this).html(`
        <details>
          <summary>
            <p class="testimonial-name">${usuarios[index].name.first} ${usuarios[index].name.last}</p>
            <p class="testimonial-meta">${usuarios[index].location.country} · Autónomo/a</p>
          </summary>
          <div class="testimonial-content">
            <img class="profile-pic" src="${usuarios[index].picture.medium}" alt="${usuarios[index].name.first} ${usuarios[index].name.last}">
            <div class="testimonial-text">
              <p class="testimonial-quote">“${quotes[index] || quotes[0]}”</p>
              <p class="testimonial-foot">Cliente desde 2024 · ${usuarios[index].email}</p>
            </div>
          </div>
        </details>
      `);
    });
  });
}
