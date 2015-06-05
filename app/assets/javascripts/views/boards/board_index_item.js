TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],
  className: "board-item btn btn-primary",
  tagName: "button",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click": "selectBoard",
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    return this;
  },

  selectBoard: function (event) {
    event.preventDefault();
    Backbone.history.navigate('boards/' + this.model.id, { trigger: true });
  },
});