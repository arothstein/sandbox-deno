// Permissions API

// On the CLI, read permission for /foo/bar is represented as --allow-read=/foo/bar. In runtime JS, it is represented as the following:
const desc = { name: "read", path: "/foo/bar" } as const;

// Global write permission.
const desc1 = { name: "write" } as const;

// Write permission to `$PWD/foo/bar`.
const desc2 = { name: "write", path: "foo/bar" } as const;

// Global net permission.
const desc3 = { name: "net" } as const;

// Net permission to 127.0.0.1:8000.
const desc4 = { name: "net", url: "127.0.0.1:8000" } as const;

// High-resolution time permission.
const desc5 = { name: "hrtime" } as const;

// QUERY PERMISSIONS

// deno run --unstable --allow-read=/foo main.ts

const desc1 = { name: "read", path: "/foo" } as const;
console.log(await Deno.permissions.query(desc1));
// PermissionStatus { state: "granted" }

const desc2 = { name: "read", path: "/foo/bar" } as const;
console.log(await Deno.permissions.query(desc2));
// PermissionStatus { state: "granted" }

const desc3 = { name: "read", path: "/bar" } as const;
console.log(await Deno.permissions.query(desc3));
// PermissionStatus { state: "prompt" }


const desc1 = { name: "write" } as const;
// is stronger than
const desc2 = { name: "write", path: "/foo" } as const;

const desc3 = { name: "net" } as const;
// is stronger than
const desc4 = { name: "net", url: "127.0.0.1:8000" } as const;