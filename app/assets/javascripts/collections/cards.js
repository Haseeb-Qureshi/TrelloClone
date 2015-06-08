TrelloClone.Collections.Cards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,
  comparator: function (card) {
    return card.get('ord');
  },
});
