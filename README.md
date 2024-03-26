To genarate (for static hosting) - test

```
 $ npx nuxi generate
```

Instant server with python (.output/public)

```
$ python3 -m http.server 8080
```

---

To build (dynamic server)

```
$ npx nuxi build
```

To preview the build

```
$ node .output/server/index.mjs
```
