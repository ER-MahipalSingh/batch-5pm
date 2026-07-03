const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "David", age: 22 },
  { id: 3, name: "Alice", age: 24 },
];

// console.log(users[2]);

// for (let i = 0; i < 3; i++) {
//   console.log(users[i]);
// }

// for (let user of users) {
//   console.log(user);
// }

// const user = users.map((user, index) => {
//   if (user.name === "Alice") {
//     console.log(user);
//   } else {
//     console.log("User not found");
//   }
// });

// const user = users.forEach((user) => {
//   console.log(user);
// });

const name = document.getElementById("name");

const show = users.forEach((user) => {
  name.innerHTML += `${user.name}` + "</br>";
});
