// Your code here!
$("#navbar-collap-button > *:nth-child(1)").on("click", function () {
    var src = $(this).attr("src");

    if (src == "images/icons/back-arrow.png") {
        $(this).attr("src", "images/icons/down-arrow.png");
    } else {
        $(this).attr("src", "images/icons/back-arrow.png");
    }

});