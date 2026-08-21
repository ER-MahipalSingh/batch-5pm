import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    { id: 1, page: "Rest", path: "/rest" },
    { id: 1, page: "Props", path: "/rest" },
    { id: 1, page: "State", path: "/rest" },
];
  return (
    <div>
      {links.map((item) => (
        <div key={item.id}>
          <Link to={`${item.path}`}>
            <button>{item.page}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
