let pos = "right";

function move() {
  const button = document.querySelector("button");
  button.classList.toggle("left");
  button.classList.toggle("right");
  pos = pos === "left" ? "right" : "left";
}

function init() {
  const button = document.querySelector("button");
  const input = document.querySelector("#password");

  button.addEventListener("mouseover", move);

  input.addEventListener("input", function () {
    const value = input.value;
    if (value.length >= 8) {
      button.classList.add("green");
      button.classList.remove("yellow");
      button.classList.remove("red");
      button.removeEventListener("mouseover", move);
    } else if (value.length >= 5) {
      button.classList.add("yellow");
      button.classList.remove("green");
      button.classList.remove("red");
      button.addEventListener("mouseover", move);
    } else {
      button.classList.add("red");
      button.classList.remove("yellow");
      button.classList.remove("green");
      button.addEventListener("mouseover", move);
    }
  });
}

window.addEventListener("load", init);




