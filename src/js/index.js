$(document).on(
  "click",
  "#navbar .nav-tabs a, #home .info-section a",
  function (event) {
    let hash = this.hash;
    if (hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 150,
        },
        800
      );

      if (window.innerWidth <= 541) {
        $("#navbar .menu-button").removeClass("menu-button--open");
        $("#navbar .nav-tabs").hide();
        menuOpen = false;
      }
    }
  }
);

var menuOpen = false;

$(document).on("click", "#navbar .menu-button", function () {
  if (menuOpen) {
    $(this).removeClass("menu-button--open");
    $("#navbar .nav-tabs").hide();
    menuOpen = false;
  } else {
    $(this).addClass("menu-button--open");
    $("#navbar .nav-tabs").show();
    menuOpen = true;
  }
});
