import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    { id: 1, pages: "Rest", path: "/rest" },
    { id: 2, pages: "Parent", path: "/parent" },
    { id: 2, pages: "Hookes", path: "/hookes" },
    { id: 2, pages: "Local", path: "/local" },
    { id: 2, pages: "Form", path: "/form" },
  ];
  return (
    <div className="flex justify-center items-center gap-2 h-screen">
      {links.map((item) => (
        <div key={item.id}>
          <Link to={`${item.path}`}>
            <button className="home-btn border border-rose-600 p-2 rounded-[5px]">
              {item.pages}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
