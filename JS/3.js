const arr = [100, 20, 30, 400, 50, 650, 70];
// const arr1 = [100,200,300]
// const arr2 = arr.concat(arr1)
// console.log(arr2);

// console.log("Original Arr: ",arr);
// console.log(arr.length);

// arr.pop()
// arr.shift()
// arr.push(500)
// arr.unshift(500)
// arr.reverse()

// console.log(arr.indexOf(30));

// console.log(arr.slice(0,5));
// console.log("Splice method: ",arr.splice(0,5, 1000));
// console.log("Original Arr: ",arr);
// console.log(arr.join());

const sum = arr.reduce((sum, total) => sum + total, 0);
// console.log(sum);

const garter = arr.filter((ele) => ele < 30);
// console.log(garter);

const sorting = arr.sort((a, b) => a - b);
// console.log(sorting);
