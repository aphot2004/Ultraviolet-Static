// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/uv/service/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/handle.js",
  client: "/uv/client.js",
  bundle: "/uv/bundle.js",
  config: "/uv/joefig.js",
  sw: "/uv/swub.js",
};
