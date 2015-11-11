var divs = document.getElementsByTagName('div');
var flash = true;

function checkerBoard() {  
  for (var i = 0; i < 72; i++) {
    document.body.appendChild(document.createElement('div'));
    divs[i].style.width = "11.1%";
    divs[i].style.paddingBottom = "11.1%";
    divs[i].style.float = "left";
  }
};

function colors() {
  var dry = function(gradient) {
    for (var i = 0; i < divs.length; i++) {

      if (gradient) {
        color1 = 'rgb(100, 0,' + 6*i + ')';
        color2 = 'rgb(0, 200,' + 6*i + ')';
      } else {
        color1 = 'rgb(0, 0, 0)';
        color2 = 'rgb(255, 255, 255)';
      };

      if (i % 2 === 0) {
        divs[i].style.backgroundColor = color1; 
      } else {
        divs[i].style.backgroundColor = color2;
      }
    }
  }

  dry(flash);
  flash = !flash;
};


checkerBoard();
window.setInterval(colors, 500);
