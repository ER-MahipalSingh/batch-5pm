// function loadFun() {
//   const grret = document.getElementById("greet");

//   setTimeout(() => {
//     grret.style.display = "block";
//   }, 3000);
// }
// loadFun();

function countFun() {
  let count = 0;
  const countEle = document.getElementById("count");

  const countTime = setInterval(() => {
    count++;
    countEle.innerHTML = count;
    if (count === 5) {
      clearInterval(countTime);
    }
  }, 1000);
}
countFun();

const slide = [
  {
    id: 1,
    image:
      "https://img.magnific.com/premium-photo/bioluminescent-tiger-with-stripes-that-glow-softly-darkness_1079150-359438.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDqZ2cHFHj4pcvxXY7-sti1zjYazHbz6t3E82_veBvJzHqW_jGSBghZed&s=10",
  },
  { id: 3, image: "https://www.pictorem.com/images/bg_analyzer.jpg" },
];

function slideFun() {
  const container = document.getElementById("container");
  let index = 0;

  const slider = setInterval(() => {
    container.innerHTML = "";
    const img = document.createElement("img");
    img.src = slide[index].image;
    container.appendChild(img);
    index = (index + 1) % slide.length;
  }, 1000);
}
slideFun();
