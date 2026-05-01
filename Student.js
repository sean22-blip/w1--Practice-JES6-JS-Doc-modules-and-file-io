import fs from 'fs/promises';
// const filePath = "./hello.txt";
// // // Write to a file (synchronously)
// fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// // // Read the file (synchronously)
// const content = fs.readFileSync(filePath, "utf8");
// console.log("File content:", content);



const filePath = "./hello.txt";
// Write to a file (Asynchronously)
console.log("First line")
 await fs.writeFile(filePath, "Hello, Node.js beginner!");
console.log("Hello file has been written!! // Third line");
// Read the file (Asynchronously)
const content = await fs.readFile(filePath, "utf8");
// setTimeout(() => {console.log("File content:", content, 1000);})
// setTimeout(() => {console.log("File content // last line:", content);})
//the second await must wait until the first one is finished executing first