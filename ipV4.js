const ipV4Regex =
  /^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$/;

const isIpV4 = (ipAddress) => ipV4Regex.test(ipAddress);

export { isIpV4 };
