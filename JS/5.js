const tech = { name: "React", version: 20 };
const strTech = JSON.stringify(tech);
// console.log(tech.name);
// console.log(Object.values(tech));
// console.log(Object.keys(tech));
// console.log(tech.hasOwnProperty("age"));
// console.log(JSON.stringify(tech));
// console.log(strTech);
// console.log(JSON.parse(strTech));

// Object.seal(tech)
// Object.freeze(tech);
tech.name = "NodeJs";
// delete tech.version;

console.log(tech);
