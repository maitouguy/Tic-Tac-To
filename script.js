const playSpace = document.querySelector("#gr");
let wD = document.querySelector("#wdisplay");
document.querySelector("#reset").addEventListener("click", () => {
  Reset();
});
let tiles = [];
function tile(elem, checked, chord) {
  this.elem = elem;
  this.checked = checked;
  this.chord = chord;
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
  tiles.push(new tile(button, undefined, i + 1));
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
  CheckForWin();
}
function Reset() {
  tiles.forEach((e) => {
    e.elem.children[0].textContent = "";
    e.checked = undefined;
  });
  wD.textContent = "";
}
function CheckForWin() {
  //this is a pretty hedious mechanisme
  let checkedArray = [tiles[0], tiles[1], tiles[2]];
  let w = CheckArray(checkedArray);

  if (w.w) {
    win(w.winner);

    return;
  }
  checkedArray = [tiles[3], tiles[4], tiles[5]];
  w = CheckArray(checkedArray);

  if (w.w) {
    win(w.winner);
    return;
  }

  checkedArray = [tiles[6], tiles[7], tiles[8]];
  w = CheckArray(checkedArray);

  if (w.w) {
    win(w.winner);

    return;
  }

  checkedArray = [tiles[0], tiles[3], tiles[6]];
  w = CheckArray(checkedArray);

  if (w.w) {
    win(w.winner);

    return;
  }

  checkedArray = [tiles[1], tiles[4], tiles[7]];
  w = CheckArray(checkedArray);

  if (w.w) {
    win(w.winner);

    return;
  }

  checkedArray = [tiles[2], tiles[5], tiles[8]];
  w = CheckArray(checkedArray);

  if (w.w) {
    win(w.winner);

    return;
  }

  checkedArray = [tiles[0], tiles[4], tiles[8]];
  w = CheckArray(checkedArray);

  if (w.w) {
    win(w.winner);

    return;
  }

  checkedArray = [tiles[2], tiles[4], tiles[6]];
  w = CheckArray(checkedArray);

  if (w.w) {
    win(w.winner);

    return;
  }
}
function CheckArray(_tiles) {
  if (
    _tiles[0].elem.children[0].textContent === "X" &&
    _tiles[1].elem.children[0].textContent === "X" &&
    _tiles[2].elem.children[0].textContent === "X"
  ) {
    return { w: true, winner: "X" };
  } else {
    if (
      _tiles[0].elem.children[0].textContent === "O" &&
      _tiles[1].elem.children[0].textContent === "O" &&
      _tiles[2].elem.children[0].textContent === "O"
    ) {
      return { w: true, winner: "O" };
    } else {
      return { w: false, winner: "" };
    }
  }
}
function win(winner) {
  wD.textContent = "The Winner is : " + winner;
}
