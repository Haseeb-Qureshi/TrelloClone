TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],
  className: "container",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "remove", this.removeBoard);
    this.listenTo(this.collection, "add", this.addBoard);
    this.collection.each(this.addBoard.bind(this));
    this.addSubview(".add-board", new TrelloClone.Views.AddBoard());
  },

  render: function () {
    this.$el.html(this.template({ boards: this.collection }));
    this.attachSubviews();
    return this;
  },

  addBoard: function (board) {
    var subView = new TrelloClone.Views.BoardsIndexItem({ model: board });
    this.addSubview(".boards", subView);
  },

  removeBoard: function (model) {
    this.removeModelSubview(".boards", model);
  },
});
