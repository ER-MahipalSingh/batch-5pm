// function authProvider() {
//   let isAuth = false;
//   const auth = new Promise((res, rej) => {
//     if (isAuth) {
//       isAuth = true;
//       res("User is auth...");
//     } else {
//       rej("User not auth...");
//     }
//   });
//   auth.then((msg) => console.log(msg)).catch((err) => console.log(err));
// }

// authProvider();

function findUser(id) {
  return new Promise((res, rej) => {
    const user = { 1: "Rmesh", 2: "Suresh" };
    if (user[id]) {
      res(`User found ${user[id]}`);
    } else {
      rej("User not found");
    }
  });
}
findUser(10)
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));
