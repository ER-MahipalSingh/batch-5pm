const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const err = document.getElementById("error");

  try {
    if (
      name.trim() === "" ||
      email.includes("@") === "" ||
      !email.includes("@")
    ) {
      //   alert("All detail's are required");
      //   console.log("All detail's are require");
      //   return;
      throw "All detail's are required";
    }

    console.log("From is submited");
  } catch (error) {
    console.log("Error: ", error);
    err.innerHTML = error;
    alert(error)
  }

  console.log(name);
  console.log(email);
  console.log(password);
});



