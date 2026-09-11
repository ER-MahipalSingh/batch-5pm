import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    { id: 1, pages: "Rest", path: "/rest" },
    { id: 2, pages: "Parent", path: "/parent" },
  ];
  return (
    <div>
      {links.map((item) => (
        <div key={item.id}>
          <Link to={`${item.path}`}>
            <button>{item.pages}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
