console.log("runnig");

const clicked = () => {
  console.log("button clicked");
};

const mousedown = () => {
  console.log("on mouse down");
};

document.addEventListener("onload", () => {
  console.log("page loaded");
});

const loading = () => {
  console.log("page loaded");
};

const unloading = () => {
  console.log("page unloaded-------------------------------------------->");
};

const offline = () => {
  console.log("it went offline");
};

const online = () => {
  console.log("it came online");
};

const blured = () => {
  console.log("blurred");
};

const beforeunload = () => {
  console.log("before unloading");
};

const rightclick = () => {
  console.log("rightclicked");
};

const mouseentered = () => {
  console.log("mouse entered the textsection");
};

const doubleclick = () => {
  console.log("double click");
  document.dispatchEvent(eve);
};

const dragged = () => {
  console.log("getting dragged!! help!!!");
};

const over = () => {
  console.log("over");
};
const keydown = () => {
  console.log("key downed");
};

const upped = () => {
  console.log("upped");
};

const pressed = () => {
  console.log("pressed");
};
const div = document.getElementById("div");

div.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

//custom event

const eve = new Event("start");

document.addEventListener("start", () => {
  console.log("new event start");
});

document.dispatchEvent(eve);
