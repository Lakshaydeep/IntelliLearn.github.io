let action = document.querySelector("button");

let velocityInp = document.querySelector("#velocity-inp");
let accInp = document.querySelector("#acc-inp");

let velocityParam = document.querySelector("#velocity-param");
let accParam = document.querySelector("#acc-param");

let scaleInp = document.querySelector("#scale").querySelector("input");

action.onclick = do_experiment;

function do_experiment() {
  let width = 50;
  let velocity = velocityInp.value;
  let acc = accInp.value;
  let scale = scaleInp.value;

  //------- Default Values for parameters ------
  if (velocity == "") {
    velocity = 1;
  }
  if (acc == "") {
    acc = -9.8;
  }
  if (scale == "") {
    scale = 10;
  }

  //---------------------------------------------

  velocity = (velocity * scale) / 1000; // Velocity in px/ms
  acc = (acc * scale) / 1000000; // Acceleration in px/ms*2

  let goUp = setInterval(moveUp, 1);
  let pos = 400;
  function moveUp() {
    velocity = velocity + acc;
    pos = pos - velocity;
    if (pos < 5) {
      width = width - velocity / 100;

      ball.style.width = String(width) + "px";
      ball.style.height = String(width) + "px";
    } else {
      ball.style.top = String(pos) + "px";
    }
  }
}
