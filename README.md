# node-public-ip

This is a node.js library wrapper to quickly and simply lookup your public IP address.

## Install

```sh
npm install node-public-ip
```

## Usage

### es6 Modules

```js
import { publicIp } from "node-public-ip";

console.log(await publicIp());
//=> "12.133.141.187"
```

### CommonJS

```js
import("node-public-ip").then(async ({ publicIp }) => {
  console.log(await publicIp());
});
//=> "12.133.141.187"
```

## API

### publicIp(options?)

Returns a `Promise<string>` with your public IPv4 or IPv6 address. Rejects on error or timeout. IPv6 addresses may require IPv6 servers `["2620:0:ccc::2", "2620:0:ccd::2"]` (IPv6 feedback help welcome!).

#### options

Type: `object`

##### servers

Type: `array of ipAddress`\
Default: `[ "208.67.222.222", "208.67.220.220", "208.67.222.220", "208.67.220.222" ]`

This sets the server IP addresses used in the DNS resolver. It is overridden in the Ipv6 method to be `["2620:0:ccc::2", "2620:0:ccd::2"]`.

##### hostname

Type: `string`\
Default `myip.opendns.com`

This should match with the server ip addresses other possible services could be `"o-o.myaddr.l.google.com"` with servers `["216.239.32.10", "216.239.34.10", "216.239.36.10", "216.239.38.10"]`.

##### timeoutMs

Type: `integer`\
Default `100` (milliseconds)

This sets the resolver timeout before it tries a different server.

##### triesPerServer

Type: `integer`\
Default `1`

This sets tries on the resolver, the number of attempts on each server.
