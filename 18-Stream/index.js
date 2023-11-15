import { createReadStream, createWriteStream } from "fs";

const options = {
  ending: "utf-8"
}

const readStream = createReadStream("input.txt", options);

const read = createReadStream("input.txt", options);
const write = createWriteStream("output.txt", options);

readStream.on("readable", () => {
  const data = readStream.read();
  if (data) {
    console.log(data);
  }
});

readStream.on("close", () => {
  console.log("The stream has been closed");
});

readStream.on("error", () => {
  console.log("An error has occured: ", e);
});

read.pipe(write);