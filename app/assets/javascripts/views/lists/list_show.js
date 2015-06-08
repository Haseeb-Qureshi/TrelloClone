TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  className: "list col-md-2",

  initialize () {
    this.listenTo(this.model, "change sync", this.render);
    this.model.cards.each(this.addCard.bind(this));
  },

  render: function () {
    this.$el.html(this.template({ list: this.model }));
    this.attachSubviews();
    this.onRender();
    return this;
  },

  onRender: function () {
    window.setTimeout(function () {
      $(".cards").sortable({
        connectWith: ".cards",
        update: function (event, ui) {
          debugger
        }
      }).disableSelection();
    }, 0);
  },

  addCard: function (card) {
    var cardView = new TrelloClone.Views.CardShow({ model: card });
    this.addSubview(".cards", cardView);
  },

});
