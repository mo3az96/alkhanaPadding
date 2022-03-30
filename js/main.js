$(window).on("load", function () {
  lazyLoad();
  numbers();
  //
});

$(document).ready(function () {
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".scroll-up").show()
      : $(".scroll-up").hide();
  });
  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });

  $("#fixedNavbar ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 767) {
      $(".menu-btn").removeClass("active");
      $(".logo").removeClass("active");
      $(".navbar").fadeOut(300);
      $(".header").removeClass("active");
      $("body").removeClass("overflow");
    }
  });

  const scrollContainer = document.querySelectorAll(".partners-overflow")[0];
  const leftBtn = document.getElementById("scroll-left");
  const rightBtn = document.getElementById("scroll-right");
  if (document.dir == "rtl") {
    scrollContainer.addEventListener("wheel", (e) => {
      var prev = 1;
      scrollContainer.scrollLeft -= e.deltaY;
      prev = scrollContainer.scrollLeft;
      console.log(scrollContainer.scrollWidth + prev);

      if (
        !(
          (scrollContainer.scrollLeft && prev) == 0 ||
          scrollContainer.scrollWidth + prev == 1140
        )
      ) {
        e.preventDefault();
      }
    });
  } else {
    scrollContainer.addEventListener("wheel", (e) => {
      var prev = 1;
      scrollContainer.scrollLeft += e.deltaY;
      prev = scrollContainer.scrollLeft;
      console.log(scrollContainer.scrollWidth + prev);

      if (
        !(
          (scrollContainer.scrollLeft && prev) == 0 ||
          scrollContainer.scrollWidth - prev == 1140
        )
      ) {
        e.preventDefault();
      }
    });
  }

  leftBtn.addEventListener("click", (e) => {
    scrollContainer.scrollLeft -= 100;
  });
  rightBtn.addEventListener("click", (e) => {
    scrollContainer.scrollLeft += 100;
  });

  var prevScroll = $(window).scrollTop();

  $(this).scrollTop() >= 250
    ? $("header").addClass("header-scroll")
    : $("header").removeClass("header-scroll fixsedt");
  $(window).scroll(function () {
    numbers();

    $(this).scrollTop() >= 250
      ? $("header").addClass("header-scroll")
      : $("header").removeClass("header-scroll fixsedt");

    var currentScroll = $(window).scrollTop();
    prevScroll < currentScroll && prevScroll > 0
      ? $("header").removeClass("fixsedt")
      : $("header").addClass("fixsedt"),
      (prevScroll = currentScroll);
  });

  $(".menu-btn").on("click", function (e) {
    $(this).toggleClass("active");
    $(".logo").toggleClass("active");
    $(".navbar").fadeToggle(300);
    $(".header").toggleClass("active");
    $("body").toggleClass("overflow");
  });
});

jQuery(function ($) {
  $(window)
    .scroll(function () {
      // selectors
      var $window = $(window),
        $body = $("body"),
        $panel = $("section");

      // Change 33% earlier than scroll position so colour is there when you arrive.
      if ($(window).width() <= 767) {
        var scroll = $window.scrollTop() + $window.height() / 10;
      } else {
        var scroll = $window.scrollTop() + $window.height() / 3;
      }
      $panel.each(function () {
        var $this = $(this);

        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });

          $body.addClass("color-" + $(this).data("color"));
        }
      });
    })
    .scroll();
});

var a = 0;
function numbers() {
  if (a === 0 && $(this).scrollTop() >= $(".about-section").offset().top) {
    $(".number-desc .number").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 1000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
    a = 1;
  }
}
