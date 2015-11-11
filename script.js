function board(color) {

var newDiv = document.createElement("div");
document.body.appendChild(newDiv);

newDiv.style.width = "11.1%";
newDiv.style.float = "left";
newDiv.style.paddingBottom = "11.1%";
newDiv.style.backgroundColor = color;

};


for (var i = 1; i < 64; i++) {
  board('rgb(100, 0,' + 6*i + ')');
  board('rgb(0, 100,' + 6*i + ')');
};
