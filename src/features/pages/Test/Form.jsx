import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skills: [],
    city: "",
  });

  const changeInputHandler = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });

    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const addSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);
      setFormData({ ...formData, skills: addSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={changeInputHandler}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={changeInputHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={changeInputHandler}
          />
        </div>

        <div>
          <label htmlFor="skills">Skills</label>

          <div>
            <label htmlFor="react">React</label>
            <input
              type="checkbox"
              name="skills"
              value="react"
              onChange={changeInputHandler}
              checked={formData.skills.includes("react")}
            />
          </div>

          <div>
            <label htmlFor="node">Node</label>
            <input
              type="checkbox"
              name="skills"
              value="node"
              onChange={changeInputHandler}
              checked={formData.skills.includes("node")}
            />
          </div>

          <div>
            <label htmlFor="javaScript">JavaScript</label>
            <input
              type="checkbox"
              name="skills"
              value="javaScript"
              onChange={changeInputHandler}
              checked={formData.skills.includes("javaScript")}
            />
          </div>
        </div>

        <div>
          <label htmlFor="City">City</label>
          <select name="city" id="city" onChange={changeInputHandler}>
            <option value="rajkot">Rajkot</option>
            <option value="surat">Surat</option>
            <option value="baroda">Baroda</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
