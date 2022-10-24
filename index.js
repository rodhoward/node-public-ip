const dns = require("node:dns");
const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
dns.lookup("example.com", options, (err, address, family) =>
  console.log("address: %j family: IPv%s", address, family)
);
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

// When options.all is true, the result will be an Array.
options.all = true;
dns.lookup("example.com", options, (err, addresses) =>
  console.log("addresses: %j", addresses)
);
