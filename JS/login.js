const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let isAuth = false;
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    if (!username || !password) {
      throw "Email and Password required";
    }
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    if (res.ok) {
      isAuth = true;
    }
    return response.formData;
  } catch (error) {
    console.log(error);
  }
});
