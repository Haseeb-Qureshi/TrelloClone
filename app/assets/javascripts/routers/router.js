TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/:id": "boardShow",
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    TrelloClone.boards = new TrelloClone.Collections.Boards();
    TrelloClone.boards.fetch();
  },

  boardsIndex: function () {
    var boardsIndex = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.boards
    });
    this._swapView(boardsIndex);
  },

  boardShow: function (id) {
    var board = TrelloClone.boards.getOrFetch(id);
    var boardShowView = new TrelloClone.Views.BoardShow({
      model: board
    });
    this._swapView(boardShowView)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;

    this.$rootEl.html(view.render().$el);
    return view;
  }

});
