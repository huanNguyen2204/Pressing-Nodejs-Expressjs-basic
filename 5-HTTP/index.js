// import request from "request";
// import { createReadSteam } from "fs";

// const formData = {
//   firstname: "Jason",
//   lastname: "Boure",
//   street: "100 Colonial",
//   city: "TP HCM",
//   country: "USA",
//   up
// }

// // import { request } from "http";

// // const options = new URL('http://localhost:8080/');

// // request(options, (response) => {
// //   let body = "";
// //   response.on("data", (chunk) => (body += chunk));
// //   response.on("end", () => {
// //     console.log(body);
// //   });
// // }).end();

// // // import { createServer } from "http";

// // // const addresses = [
// // //   {
// // //     id: 1,
// // //     firstName: "James",
// // //     lastName: "Bond",
// // //     street: "12 Milkbank",
// // //     city: "London",
// // //     country: "UK"
// // //   },
// // //   {
// // //     id: 2,
// // //     firstName: "Sherlock",
// // //     lastName: "Holmes",
// // //     street: "221 Baker St",
// // //     city: "London",
// // //     country: "UK"
// // //   },
// // // ];

// // // createServer((request, response) => {
// // //   response.writeHead(200, { "content-type": "text/html" });

// // //   const responseBody = `
// // //     <!DOCTYPE html>
// // //     <html lang="en">
// // //     <head>
// // //       <meta charset="UTF-8">
// // //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // //       <title>Address book</title>
// // //     </head>
// // //     <body>
// // //       <h1>Address book</h1>
// // //       <thead>
// // //         <tr>
// // //           <th>Id</th>
// // //           <th>First name</th>
// // //           <th>Last name</th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         ${addresses.map(createRow).join("")}
// // //       </tbody>    
// // //     </body>
// // //     </html>
// // //   `;

// // //   response.end(responseBody);
// // // }).listen(8080, () => {
// // //   console.log("Address book via localhost:8080")
// // // });

// // // function createRow(address) {
// // //   return `
// // //     <tr>
// // //       <td>${address.id}</td>
// // //       <td>${address.firstName}</td>
// // //       <td>${address.lastName}</td>
// // //     </tr>
// // //   `
// // // }