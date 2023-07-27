//Get the button that opens the modal
var btn = document.querySelectorAll(".modal-btn");

// All page modals
var modals = document.querySelectorAll(".modal-bg");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("modal-close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    let modal = document.querySelector(e.target.getAttribute("href"));
    if (modal) {
      modal.style.display = "flex";
    }
  };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};
/*****dynamique margin-top adaptation to responsive menu expense ********** */
const main = document.getElementById("main");
const anchor = document.querySelectorAll(".anchor");

document.getElementById("nav-toggle").onclick = function () {
  main.classList.toggle("responsive-main");

  anchor.forEach((item) => {
    item.classList.toggle("responsive-anchor");
  });

  // // access properties using this keyword
  // if (this.checked) {
  //   // Returns true if checked
  //   main.style.marginTop = "40vh";
  //   console.log(anchor);
  //   // anchor.forEach((item) => {
  //   //   item.style.marginTop = "300px";
  //   // });
  // } else {
  //   main.style.marginTop = "15vh";
  // }
};
