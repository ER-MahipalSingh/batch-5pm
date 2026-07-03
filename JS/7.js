// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("Hello");
//   console.log("hello");
// });

// const name = document.querySelector("#name");
// const name = document.querySelectorAll("#name");
// name.innerHTML = "Javascript";
// name.forEach((item) => {
//   item.innerHTML = "JavaScript";
// });

const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "David", age: 22 },
  { id: 3, name: "Alice", age: 24 },
];

const btn = document.getElementById("btn");
const container = document.getElementById("container");

let isOpen = false;

btn.addEventListener("click", () => {
  if (!isOpen) {
    container.innerHTML = "";
    users.forEach((user) => {
      const p = document.createElement("p");
      p.innerHTML = `${user.name}`;
      container.appendChild(p);
    });
    isOpen = true;
  } else {
    container.innerHTML = "";
    isOpen = false;
  }
});
