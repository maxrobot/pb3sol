module.exports = {
  networks: {
    development: {
      //assume user uses ganache ethereum client with default setting
      host: "localhost",
      port: 7545, 
      network_id: "*", // Match any network id
      gas: 4600000,
    }
  }
};
