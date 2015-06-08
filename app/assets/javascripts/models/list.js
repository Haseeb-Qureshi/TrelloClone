TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/lists",
  
  constructor: function (options) {
    this.cards = new TrelloClone.Collections.Cards();
    Backbone.Model.apply(this, arguments);
  },

  parse: function (response) {
    var that = this;
    if (response.cards) {
      this.cards.set(response.cards);
      delete response.cards;
    }

    return response;
  }
});
