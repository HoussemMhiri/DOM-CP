var plusBtns = document.querySelectorAll(".plus");
var minBtns = document.querySelectorAll(".minus");
var hearts = document.querySelectorAll(".like");
var trash = document.querySelectorAll(".delete");

function plus(e) {
  var div = e.target.parentElement;
  var p = div.querySelector("p");
  var score = Number(p.innerHTML);
  p.innerHTML = ++score;
  var uPrice = div.parentElement.nextElementSibling;
  var price = uPrice.nextElementSibling;
  price.innerHTML = score * Number(uPrice.innerHTML);
  sum();
}

function min(e) {
  var div = e.target.parentElement;
  var p = div.querySelector("p");
  var score = Number(p.innerHTML);
  if (score > 0) {
    p.innerHTML = --score;
    var uPrice = div.parentElement.nextElementSibling;
    var price = uPrice.nextElementSibling;
    price.innerHTML = score * Number(uPrice.innerHTML);
    sum();
  }
}

for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", plus);
  minBtns[i].addEventListener("click", min);
}

function colorChange(e) {
  if (e.target.style.color !== "red") {
    e.target.style.color = "red";
  } else {
    e.target.style.color = "";
  }
}

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", colorChange);
}

function sum() {
  var sum = 0;
  var allP = document.querySelectorAll(".price");
  for (let i = 0; i < allP.length; i++) {
    var total = document.getElementById("total");
    var tots = Number((sum += Number(allP[i].innerHTML)));
    total.innerHTML = tots;
  }
  return sum;
}

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", supprimer);
}

function supprimer(e) {
  var target = e.target.parentElement;
  var targP = target.parentElement;
  var td = targP.parentElement;
  var tr = td.parentElement;
  var price = tr.querySelector(".price");
  price.innerHTML = 0;
  sum();
  tr.remove();
}
