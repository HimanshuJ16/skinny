function loader() {
  let tl = gsap.timeline();

  tl.to("#loader h1 span", {
    color: "#ffffff",
    y: 10,
    stagger: 0.2,
    repeat: -1,
  });

  window.addEventListener("load", function () {
    setTimeout(function () {
      gsap.to("#loader", {
        top: "-100%",
        duration: 1,
        display: "none",
      });
      textEntry();
    }, 1000);
  });
}

function pageOneTextAnimation() {
  let container = document.querySelector(".main .page1 .container");

  const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - prev > delay) {
        prev = now;
        return func(...args);
      }
    };
  };

  let imageArray = [
    "../assets/images/products/product1.webp",
    "../assets/images/products/product2.webp",
    "../assets/images/products/product3.webp",
    "../assets/images/products/product4.webp",
    "../assets/images/products/product5.webp",
    "../assets/images/products/product6.webp",
    "../assets/images/products/product7.webp",
  ];

  container.addEventListener(
    "mousemove",
    throttleFunction((dets) => {
      let imageDiv = document.createElement("div");
      imageDiv.classList.add("image-div");
      container.appendChild(imageDiv);
      imageDiv.style.left = dets.clientX - 150 + "px";
      imageDiv.style.top = dets.clientY - 250 + "px";

      let ranNum = Math.floor(Math.random() * imageArray.length);
      let pics = imageArray[ranNum];

      let image = document.createElement("img");
      image.classList.add("images");
      imageDiv.appendChild(image);
      image.setAttribute("src", pics);

      gsap.to(image, {
        y: "0%",
        ease: "expo",
        duration: 1,
      });

      gsap.to(image, {
        y: "100%",
        delay: 1,
        ease: "expo",
        duration: 0.8,
      });

      setTimeout(() => {
        imageDiv.remove();
        imageDiv.style.transition = "all ease-out 0.2s";
      }, 1000);
    }, 110)
  );
}

function textEntry() {
  const tl = gsap.timeline();

  tl.from(
    ".header",
    {
      delay: 1,
      duration: 1,
      y: -100,
      opacity: 0,
      stagger: 0.1,
    },
    "entry"
  )
    .from(
      ".main .page1 .container h1:first-child",
      {
        delay: 1,
        duration: 1,
        x: -100,
        transform: "rotate(-5deg)",
        opacity: 0,
        stagger: 0.1,
      },
      "entry"
    )
    .from(
      ".main .page1 .container h1:last-child",
      {
        delay: 1,
        duration: 1,
        x: 100,
        transform: "rotate(5deg)",
        opacity: 0,
        stagger: 0.1,
      },
      "entry"
    )
    .from(
      ".main .page1 .container h1:nth-child(2)",
      {
        delay: 1,
        duration: 1,
        opacity: 0,
        stagger: 0.1,
      },
      "entry"
    );

  tl.add(() => {
    pageOneTextAnimation();
  });
}

function pageOneScrollAnimation(elem, xAmount, rotate) {
  gsap.to(elem, {
    scrollTrigger: {
      scroller: "body",
      trigger: ".main .page2",
      start: "10% bottom",
      end: "40% bottom",
      scrub: 2,
    },
    x: xAmount,
    opacity: 0,
    rotate: rotate,
  });
}

loader();
pageOneScrollAnimation(
  ".main .page1 .container h1:first-child",
  -100,
  "-10deg"
);
pageOneScrollAnimation(".main .page1 .container h1:last-child", 100, "10deg");

function productPageAnimation(elem, trigger = elem) {
  gsap.from(elem, {
    scrollTrigger: {
      scroller: "body",
      trigger: trigger,
      start: "top bottom",
      end: "top bottom",
      scrub: 2,
    },
    y: "10px",
    opacity: 0.6,
  });
}

function productPageInnerAnimation(elem, trigger = elem, amount) {
  gsap.from(elem, {
    scrollTrigger: {
      scroller: "body",
      trigger: trigger,
      start: "20% bottom",
      end: "50% bottom",
      scrub: 2,
    },
    x: amount,
    opacity: 0,
  });
}

function aboutUsPageAnimation(elem, trigger = elem, xAmount) {
  gsap.from(elem, {
    scrollTrigger: {
      scroller: "body",
      trigger: trigger,
      start: "10% bottom",
      end: "60% bottom",
      scrub: 2,
    },
    x: xAmount,
    opacity: 0,
  });
}

gsap.to(".main .page2 h1 span", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".main .page2",
    start: "20% bottom",
    end: "60% bottom",
    scrub: 2,
  },
  stagger: 1,
  color: "#ffffff",
  ease: "none",
});

productPageAnimation(".main .page3");
productPageInnerAnimation(".main .page3 .left", ".main .page3", 100);
productPageInnerAnimation(".main .page3 .right", ".main .page3", -100);
productPageAnimation(".main .page4");
productPageInnerAnimation(".main .page4 .left", ".main .page4", 100);
productPageInnerAnimation(".main .page4 .right", ".main .page4", -100);
productPageAnimation(".main .page5");
productPageInnerAnimation(".main .page5 .left", ".main .page5", 100);
productPageInnerAnimation(".main .page5 .right", ".main .page5", -100);

gsap.from(".main .page6 h1", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".main .page6",
    start: "10% bottom",
    end: "40% bottom",
    scrub: 2,
  },
  y: 100,
  opacity: 0,
});

gsap.from(".main .page6 .inner-page6 .left", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".main .page6",
    start: "20% bottom",
    end: "60% bottom",
    scrub: 2,
  },
  x: "-100%",
  opacity: 0,
});

gsap.to(".main .page7 .inner-page7 .slides .slide", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".main .page7",
    start: "10% top",
    end: "bottom bottom",
    scrub: 2,
  },
  xPercent: -300,
});

aboutUsPageAnimation(
  ".main .page8 .inner-page8:first-child .left",
  ".main .page8 .inner-page8:first-child",
  "-100px"
);

aboutUsPageAnimation(
  ".main .page8 .inner-page8:first-child .right",
  ".main .page8 .inner-page8:first-child",
  "100px"
);

aboutUsPageAnimation(
  ".main .page8 .inner-page8:last-child .left",
  ".main .page8 .inner-page8:last-child",
  "-100px"
);

aboutUsPageAnimation(
  ".main .page8 .inner-page8:last-child .right",
  ".main .page8 .inner-page8:last-child",
  "100px"
);

aboutUsPageAnimation(".main .page9 .right", ".main .page9", "100px");

aboutUsPageAnimation(".main .page9 .left", ".main .page9", "-100px");

gsap.from(".main footer .f-item", {
  scrollTrigger: {
    scroller: "body",
    trigger: ".main footer",
    start: "10% bottom",
    end: "30% bottom",
    scrub: 2,
  },
  y: 100,
  opacity: 0,
});
