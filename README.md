# fastify-mollie

Mollie client API bindigs to Fastify!

### ECMA

```js
import fastify from "fastify";
const app = fastify();
import plugin from "fp-mollie";

app.register(plugin, { apiKey: "your_key" });
app.get("/", async (req, res) => {
  console.log(await app.mollie.methods.list());
  return res.send("ok");
});
app.listen({ port: 2000 });
```

### CommonJS

```js
const fastify = require("fastify");
const app = fastify();
const plugin = require("fp-mollie");

app.register(plugin, { apiKey: "your_key" });
app.get("/", async (req, res) => {
  console.log(await app.mollie.methods.list());
  return res.send("ok");
});
app.listen({ port: 2000 });
```
