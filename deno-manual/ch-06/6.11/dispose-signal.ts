/**
 * dispose-signal.ts
 * deno run --unstable dispose-signal.ts
 */
const sig = Deno.signal(Deno.Signal.SIGINT);
setTimeout(() => {
  sig.dispose();
  console.log("No longer watching SIGINT signal");
}, 5000);

console.log("Watching SIGINT signals");
for await (const _ of sig) {
  console.log("interrupted");
}