/**
 * write.ts
 * deno run --allow-write write.ts
 */
const write = Deno.writeTextFile("./hello.txt", "Hello World!");

write.then(() => console.log("File written to ./hello.txt"));
/**
 * Output: File written to ./hello.txt
 */