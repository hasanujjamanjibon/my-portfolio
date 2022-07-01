$(document).ready(function () {
  var options = {
    strings: [
      "Hasan Ujjaman Jibon.",
      "Digital Marketing Expert.",
      "Hasan Ujjaman Jibon.",
      "Junior Web Designer",
    ],
    typeSpeed: 40,
    backSpeed: 40,
    showCursor: false,
    loop: true,
  };

  var typed = new Typed(".typing", options);

  $(".skill-per").each(function () {
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per + "%");
    $({ animatedValue: 0 }).animate(
      { animatedValue: per },
      {
        duration: 1000,
        step: function () {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
        complete: function () {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
      }
    );
  });
  $(".js--about-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
