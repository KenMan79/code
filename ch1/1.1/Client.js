const EthCrypto = require('eth-crypto')

class Client {
    constructor() {
      //TODO
      
    }

    toHash(data) {
      //TODO
      return EthCrypto.hash.keccak256(data);
    }

    sign(data) {
      // TODO
    }

    verify(signature, messageHash, address) {
      //TODO
    }
}

module.exports = Client;