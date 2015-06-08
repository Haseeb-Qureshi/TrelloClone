TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],
  className: "board-item btn btn-primary",
  tagName: "button",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button.delete-board": "deleteBoard",
    "click not:button.delete-board": "selectBoard",
    "mouseover": "showDelete",
    "mouseout": "removeDelete",
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: this.remove.bind(this),
    });
  },

  selectBoard: function (event) {
    event.preventDefault();
    Backbone.history.navigate('boards/' + this.model.id, { trigger: true });
  },

  showDelete: function (event) {
    this.$el.find('button.delete-board').removeClass('hidden');
  },

  removeDelete: function (event) {
    this.$el.find('button.delete-board').addClass('hidden');
  }
});
