var targetEl = document.querySelector(".clicky");
targetEl.addEventListener("mouseup", function() {
  console.log("clickkytyclick");
  var hue = Math.random() * 255;
  targetEl.setAttribute("material", {
    color: "hsl(" + hue + ",100%,50%)"
  });
});
