const os = require("os");
console.log(os.uptime());

const { uptime } = require("os");
console.log(uptime);

// const { dirname } = require("path");
// const { fileURLToPath } = require("url");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__filename);
// console.log(__dirname);

// process.on("unhandleRejection", (error) => {
//   console.log("unhandleRejection");
//   console.error(error);
// });

// function withPromise() {
//   return Promise.reject("Whoops, an Error occured");
// }

// withPromise().then(() => {
//   console.log("Promise resolve");
// });

setTimeout(() => {
  console.log('setTimeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
queueMicrotask(() => {
  console.log('queueMicrotask');
});
process.nextTick(() => {
  console.log('nextTick');
});

const add = require("./funcs/add.cjs");
const result = add(1, 2);
console.log("result: ", result);
