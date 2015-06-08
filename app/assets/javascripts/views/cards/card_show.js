TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  className: "card sortable",
  id: function () { return this.model.id; },

  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    this.$el.data("id", this.model.id);
    return this;
  },

});
