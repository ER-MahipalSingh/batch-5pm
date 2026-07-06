// window.addEventListener("scroll", () => {
//   if (window.scrollY > 200) {
//     console.log(window.scrollY);
//   }
// });

const box = document.getElementById("container");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 150) {
//     box.style.background = "black";
//   }
// });

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    box.classList.add("effect");
  } else {
    box.classList.remove("effect");
  }
});
