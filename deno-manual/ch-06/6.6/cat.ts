/**
 * cat.ts
 * deno run --allow-read https://deno.land/std@0.78.0/examples/cat.ts
 */
for (let i = 0; i < Deno.args.length; i++) {
  const filename = Deno.args[i];
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}