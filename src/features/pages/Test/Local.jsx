import React, { useEffect, useState } from "react";

const Local = () => {
  //   const [data, setData] = useState({ id: 1, tech: "Javascript", version: 19 });
  const [data, setData] = useState([
    { id: 1, tech: "Javascript", version: 19 },
    { id: 2, tech: "Javascript", version: 19 },
    { id: 3, tech: "Javascript", version: 19 },
  ]);
  //   console.log(data);

  //   const addToLocal = localStorage.setItem("data", JSON.stringify(data));
  //   const getFromLocal = JSON.parse(localStorage.getItem("data"));
  //   console.log(getFromLocal);

  const updateToLocal = (id) => {
    setData((preData) =>
      preData.map((item) =>
        item.id === id ? { ...item, tech: "Node" } : item,
      ),
    );
  };

  useEffect(() => {}, [data]);
  return (
    <div>
      {/* <h2>Tech: {data.tech}</h2> */}
      {data.map((item) => (
        <div key={item.id}>
          <h2>Tech: {item.tech}</h2>
          <button onClick={() => updateToLocal(item?.id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default Local;
