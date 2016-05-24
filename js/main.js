$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $('#menu ul').hide();
});

function initMenu() {
    $('#menu ul').hide();
    $('#menu ul').children('.current').parent().show();
    //$('#menu ul:first').show();
    $('#menu li a').click(
      function () {
          var checkElement = $(this).next();
          if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
              return false;
          }
          if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
              $('#menu ul:visible').slideUp('normal');
              checkElement.slideDown('normal');
              return false;
          }
      }
      );
}
$(document).ready(function () { initMenu(); });

$("#menu-toggle > *:nth-child(1)").on("click", function () {
    var src = $(this).attr("src");

    if (src == "images/icons/back-arrow.png") {
        $(this).attr("src", "images/icons/next-arrow.png");
    } else {
        $(this).attr("src", "images/icons/back-arrow.png");
    }
});
