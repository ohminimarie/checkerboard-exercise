function board(color) {

var newDiv = document.createElement("div");
document.body.appendChild(newDiv);

newDiv.style.width = "11.1%";
newDiv.style.float = "left";
newDiv.style.paddingBottom = "11.1%";
newDiv.style.backgroundColor = color;

};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

for (var i = 1; i < 64; i++) {
  board(getRandomColor());
};