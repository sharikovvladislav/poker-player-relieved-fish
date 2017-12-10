class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(JSON.stringify(gameState, null, 2));
    const gs = gameState;
    bet(gs.current_buy_in - gs.players[gs.in_action].bet);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
