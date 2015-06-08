TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  className: "list col-md-2",
  id: function () { return this.model.id; },

  initialize: function () {
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
    var that = this;
    window.setTimeout(function () {
      $(".cards").sortable({
        connectWith: ".cards",
        remove: function (event, ui) {
        },
        receive: function (event, ui) {
          var newList = ui.sender;
          var newOrd = ui.position;
          var card = that.model.cards.get(ui.item.attr('id'));
          // DO MORE STUFF HERE TO MAKE THIS WORK. doesn't work yet.
        },
      }).disableSelection();
    }, 0);
  },

  addCard: function (card) {
    var cardView = new TrelloClone.Views.CardShow({ model: card });
    this.addSubview(".cards", cardView);
  },

});
