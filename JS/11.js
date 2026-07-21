// const user = { id: 1, name: "Jhon", age: 20 };

// const setToLocal = localStorage.setItem("user", JSON.stringify(user));

// const getFromLocal = JSON.parse(localStorage.getItem("user"));
// console.log(getFromLocal);

// const name = "Mahipal Singh";
// localStorage.setItem("name", name);
// const deleteLocal = localStorage.removeItem("name");

// localStorage.clear()

const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "David", age: 22 },
  { id: 3, name: "Alice", age: 23 },
];

const setToLocal = localStorage.setItem("users", JSON.stringify(users));
const getToLocal = JSON.parse(localStorage.getItem("users"));
console.log(getToLocal);

const update = getToLocal.map((item) => {
  if (item.id === 2) {
    item.age = 30;
  }
  return item;
});

const updateLocal = localStorage.setItem("users", JSON.stringify(update));
