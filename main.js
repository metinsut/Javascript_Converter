$(document).ready(function() {
    Materialize.updateTextFields();
  });

document.getElementById("kapsayıcı").style.visibility = "hidden"
document.getElementById("deger").addEventListener("input", (x) => {
  let y = x.target.value;
  document.getElementById("kapsayıcı").style.visibility = "visible"
  document.getElementById("bir").innerHTML = y*y;
  document.getElementById("iki").innerHTML = Math.sqrt(y);;
  document.getElementById("üç").innerHTML = y*2
  // if (document.getElementById("deger").innerHTML = 3) {
  //   document.getElementById("kapsayıcı").style.visibility = "hidden"
  // }
});
