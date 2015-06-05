TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "api/boards",
  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    var board = this.get(id);
    var that = this;
    if (board) {
      board.fetch();
    } else {
      board = new TrelloClone.Models.Board({ id: id });
      board.fetch({ success: that.add.bind(that, board) });
    }
    return board;
  },
});
