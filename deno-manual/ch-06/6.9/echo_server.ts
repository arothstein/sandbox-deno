/**
 * echo_server.ts
 * deno run --allow-net echo_server.ts
 */
const listener = Deno.listen({ port: 8080 });
console.log("listening on 127.0.0.1:8080");
for await (const conn of listener) {
  Deno.copy(conn, conn);
}