const playSpace = document.querySelector("#gr");
document.querySelector("#reset").addEventListener("click", () => {
  Reset();
});
let tiles = [];
function tile(elem, checked) {
  this.elem = elem;
  this.checked = checked;
}
for (let i = 0; i < 9; i++) {
  let button = document.createElement("button");
  let mark = document.createElement("p");
  button.append(mark);
  button.id = i + 1;
  playSpace.append(button);
  button.addEventListener("click", () => {
    MarkButton(i);
  });
  tiles.push(new tile(button, undefined));
}
let x = false;
function MarkButton(index) {
  if (tiles[index].checked != undefined) return;
  let mark = tiles[index].elem.children[0];
  if (x) {
    mark.textContent = "X";
  } else {
    mark.textContent = "O";
  }
  tiles[index].checked = !tiles[index].checked;
  x = !x;
}
function Reset() {
  tiles.forEach((e) => {
    e.elem.children[0].textContent = "";
    e.checked = undefined;
  });
}
function CheckForWin() {}
