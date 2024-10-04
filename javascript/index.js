(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

function textSplitter(element) {
  const paragraph = element;
  const text = paragraph.textContent;
  paragraph.innerHTML = "";

  text.split("").forEach(function (letter) {
    let spannedText = `<span>${letter}</span>`;
    paragraph.innerHTML += spannedText;
  });
}

textSplitter(document.querySelector(".main .page2 h1"));

textSplitter(document.querySelector("#loader h1"));
