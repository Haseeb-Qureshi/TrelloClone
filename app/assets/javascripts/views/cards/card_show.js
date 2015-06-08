TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  className: "card sortable",
  id: function () { return this.model.id; },

  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click button": "deleteCard",
    "mouseover": "showDelete",
    "mouseout": "removeDelete",
  },

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    this.$el.data("id", this.model.id);
    return this;
  },

  deleteCard: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: this.remove.bind(this),
    });
  },

  showDelete: function (event) {
    this.$el.find('button.delete-card').removeClass('invisible');
  },

  removeDelete: function (event) {
    this.$el.find('button.delete-card').addClass('invisible');
  },

});
