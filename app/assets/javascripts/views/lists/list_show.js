TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  className: "list neverending-col group",
  id: function () { return "list-" + this.model.id; },

  initialize: function () {
    this.listenTo(this.model, "change sync", this.render);
    this.listenTo(this.model.cards, "add", this.addCard);
    this.model.cards.each(this.addCard.bind(this));
    this.addSubview("div.add-card-container", new TrelloClone.Views.AddCard({
      model: this.model,
    }));
  },

  events: {
    "click button.delete-list": "deleteList",
    "mouseover": "showDelete",
    "mouseout": "removeDelete",
  },

  render: function () {
    this.$el.html(this.template({ list: this.model }));
    this.attachSubviews();
    this.onRender();
    return this;
  },


  deleteList: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: this.remove.bind(this),
    });
  },

  showDelete: function (event) {
    var $target = $(event.target);
    if ($target.hasClass("list") || $target.hasClass("delete-list") || $target.hasClass("cards") || $target.is('h4')) {
      this.$el.find('button.delete-list').removeClass('invisible');
    }
  },

  removeDelete: function (event) {
    this.$el.find('button.delete-list').addClass('invisible');
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
