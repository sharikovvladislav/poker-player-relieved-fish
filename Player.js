class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(JSON.stringify(gameState, null, 2));
    bet(10);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
