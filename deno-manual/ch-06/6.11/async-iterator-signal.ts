/**
 * async-iterator-signal.ts
 * deno run --unstable async-iterator-signal.ts
 */
console.log("Press Ctrl-C to trigger a SIGINT signal");
for await (const _ of Deno.signal(Deno.Signal.SIGINT)) {
  console.log("interrupted!");
  Deno.exit();
}