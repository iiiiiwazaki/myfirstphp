javascript:var recsGamepad = document.getElementsByClassName("recsGamepad");
var target = recsGamepad[0].children;
function onButton() {
  if(target[3].getAttribute("aria-label") === "いいね！"){
    target[3].click();
  }
}
setTimeout(onButton, 1000);
setTimeout(onButton, 2000);
setTimeout(onButton, 3000);
setTimeout(onButton, 4000);