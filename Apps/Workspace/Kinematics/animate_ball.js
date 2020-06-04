let action = document.querySelector("button");

let velocityInp = document.querySelector("#velocity-inp");
let accInp = document.querySelector("#acc-inp");

let velocityParam = document.querySelector("#velocity-param");
let accParam = document.querySelector("#acc-param");

action.onclick = do_experiment();

function do_experiment() {
  let velocity = velocityInp.value;
  let acc = accInp.value;
  if (velocity == "") {
    velocity = 1;
  }
  if (acc == "") {
    acc = 9.8;
  }
  velocity = (velocity * 10) / 1000; // Velocity in px/ms
  acc = (acc * 10) / 1000000; // Acceleration in px/ms*2

  let goUp = setInterval(moveUp, 1);
  let pos = 400;
  function moveUp() {
    velocity = velocity - acc;
    console.log(velocity);

    pos = pos - velocity;
    ball.style.top = String(pos) + "px";

    if (velocity == 0) {
      console.log("STOPPED ");
      clearInterval(goUp);
    }
  }
}
