$(document).ready(function () {
  $(".testimonial-card").click(function () {
    const card = $(this);

    $.getJSON("https://randomuser.me/api/", function (data) {
      let usuario = data.results[0];
      card.find(".user-info").remove();
      card.append(`
        <div class="user-info">
          <p><strong>Name:</strong> ${usuario.name.first} ${usuario.name.last}</p>
          <p><strong>Email:</strong> ${usuario.email}</p>
          <img src="${usuario.picture.large}" alt="User Picture" style="width: 80px; border-radius: 50%; margin-top: 10px;">
        </div>
            `);
    });
  });

  $("#dark-mode").click(function () {
    $("body").toggleClass("dark-mode-page");
  });
});
