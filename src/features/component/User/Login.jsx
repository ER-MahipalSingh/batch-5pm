import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/userReducer/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { users, isAuth } = useSelector((state) => state.users);
  console.log(users);

  const inputCahngeHandler = (e) => {
    setFormData((preForm) => ({
      ...preForm,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <form onSubmit={loginHandler}>
      <div>
        <label>username</label>
        <input
          placeholder="Enter your username"
          name="username"
          onChange={inputCahngeHandler}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          placeholder="Enter your password"
          name="password"
          onChange={inputCahngeHandler}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
