import React, { version } from "react";

const Rest = () => {
  // const a = [10,20,30,40];
  // const b = [1,2,3,4];
  // const c = [...a, ...b]
  // const d = [...a, 1000]
  // console.log(d);

  // const data = {tech:"JavaScript", version:19, year:1995}

  // const add = {...data, year: 1995};
  // const update = {...data, version: 20}
  // const {tech, ...others} = data;
  // console.log(tech);
  // console.log(others);

  // function sum(...num) {
  //   return num.reduce((a, b) => a + b, 0);
  // }
  // const res = sum(10,20,30,40,50);
  // console.log(res);

  const data = [
    { id: 1, tech: "JavaScript", version: 19 },
    { id: 2, tech: "Java", version: 10 },
    { id: 3, tech: "Node", version: 24 },
  ];

  const add = [...data, { id: 4, tech: "React", version: 18 }];
  // console.log(add);

  const update = data.map((item) => {
    if (item.id === 2) {
      return { ...item, version: 50 };
    }
    return item;
  });
  console.log(update);

  return <div>Rest Page</div>;
};

export default Rest;
