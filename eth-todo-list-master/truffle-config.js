module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "31337" // Match any network id chain ID Eth main/test / local host
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
