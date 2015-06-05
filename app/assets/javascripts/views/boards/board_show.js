TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },


  events: {
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
