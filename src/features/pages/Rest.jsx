const Rest = () => {
  // const a = [10,20,30];
  // const b = [1,2,3]
  // const c = [...a, ...b];
  // const  update = [...a, 500, 100]
  // console.log(update);

  const obj = {
    name: "python",
    version: 20,
    year: 1991,
  };
  // const update = {
  //   ...obj,
  //   version: 22,
  // };
  // const add = {
  //   ...obj,
  //   year: 1991
  // }
  // const { name, ...others } = obj;

  // console.log(name);
  // console.log(others);

  // function sum(...num) {
  //   return num.reduce((a, b) => a + b, 0);
  // }
  // console.log(sum(10, 20, 30, 40, 50));

  const data = [
    { id: 1, tech: "python", version: 3 },
    { id: 2, tech: "javascript", version: 17 },
  ];

  console.log("Original: ", data);

  // const add = [
  //   ...data,
  //   {id:3, tech:"react", version:19}
  // ]

  const update = data.map((item) => {
    if (item.id === 1) {
      return { ...item, tech: "java" };
    }
    return item;
  });

  console.log(update);

  return <div>Hello im a Rest page</div>;
};

export default Rest;
