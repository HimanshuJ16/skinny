const crs = document.getElementById("cursor");

document.querySelector(".main").addEventListener("mousemove", function (e) {
  crs.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document
  .querySelectorAll(".main .product-page .left img")
  .forEach(function (product) {
    product.addEventListener("mouseenter", function () {
      crs.style.width = "100px";
      crs.style.height = "100px";
    });

    product.addEventListener("mouseleave", function () {
      crs.style.width = "15px";
      crs.style.height = "15px";
    });
  });

document.querySelectorAll(".main .slides .slide h2").forEach(function (h2) {
  h2.addEventListener("mouseenter", function () {
    crs.style.width = "50px";
    crs.style.height = "50px";
  });

  h2.addEventListener("mouseleave", function () {
    crs.style.width = "15px";
    crs.style.height = "15px";
  });
});

document
  .querySelectorAll(".main .page6 .inner-page6 .left h2")
  .forEach(function (h2) {
    h2.addEventListener("mouseenter", function () {
      crs.style.width = "30px";
      crs.style.height = "30px";
    });

    h2.addEventListener("mouseleave", function () {
      crs.style.width = "15px";
      crs.style.height = "15px";
    });
  });

document.addEventListener("mouseleave", function () {
  crs.style.width = "0px";
  crs.style.height = "0px";
});

document.addEventListener("mouseenter", function () {
  crs.style.width = "15px";
  crs.style.height = "15px";
});
