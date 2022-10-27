import { Resolver } from "node:dns/promises";

/**
 * publicIp uses nodes DNS resolver and services like "myip.opendns.com" to return you're public IP address.
 * @constructor
 * @param {object} options - Configuration for the DNS resolver.
 * @param {array} options.servers - Array of server IP addresses.
 * @param {string} options.hostname - The hostname of the dns service. Defaults to "myip.opendns.com"
 * @param {integer} options.timeoutMs - Resolver timeout in milliseconds.
 * @param {integer} options.triesPerServer - Resolver tries before trying the next server IP address.
 * @param {function} options.resultTransform - Takes the DNS result and tries to convert it to a single IP address string.
 */
const publicIp = ({
  servers = [
    "208.67.222.222",
    "208.67.220.220",
    "208.67.222.220",
    "208.67.220.222",
  ],
  hostname = "myip.opendns.com",
  timeoutMs = 100,
  triesPerServer = 1,
  resultTransform = (addresses) =>
    addresses[0]?.address || addresses[0]?.entries?.[0],
} = {}) => {
  const resolver = new Resolver({ tries: triesPerServer, timeout: timeoutMs });
  resolver.setServers(servers);
  // Resolver results:
  // o-o.myaddr.l.google.com: [ { entries: [ '121.200.6.176' ], type: 'TXT' } ]
  // myip.opendns.com: [ { address: '147.182.172.106', ttl: 0, type: 'A' } ]
  return resolver.resolveAny(hostname).then(resultTransform);
};

export { publicIp };
